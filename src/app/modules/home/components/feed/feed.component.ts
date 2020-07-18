import { Component, OnInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { CoreHttpService } from 'src/app/core/services/core.http.service';
import { SearchResponse, ArticleComplete } from '../../models'
import { Router, ActivatedRoute } from '@angular/router';
import { TableConfig } from 'src/app/shared/models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public articles:ArticleComplete[] = [];
  public articleLocalData:any = null;
  public dataSource = new MatTableDataSource<ArticleComplete>(this.articles);

  public paginationData = {
    page: 1,
    nbPages: 0,
    hitsPerPage: 20,
  };
  public timelineData = {
    x: this.articleLocalData ? Object.keys(this.articleLocalData) : [],
    y: this.articleLocalData ? Object.values(this.articleLocalData).map((item:any)=>item.votes) : []
  };
  public query: string = '';

  constructor(private _http:CoreHttpService, 
              private _route:Router, 
              private _activatedRoute:ActivatedRoute, 
              @Inject(PLATFORM_ID) private platformId: any,
              @Inject('LOCALSTORAGE') private localStorage: any) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
        // localStorage will be available: we can use it.
        this.articleLocalData = JSON.parse(this.localStorage.getItem("articles"));
        console.log("LOCALHOST")
    }
    if (isPlatformServer(this.platformId)) {
        // localStorage will be null.
      
    }
    this._activatedRoute.queryParams.subscribe(qParams=>{
      this.paginationData.page = qParams.page ? qParams.page : 1;
      this.query = qParams.query ? qParams.query : '';
      this.searchArticles();
    });
    this.dataSource.paginator = this.paginator;
   
  }

  /**
   * 
   * @param id Article ObjectId
   * @return void
   */
  searchArticles(): void{
    this._http.get(`v1/search?query=${this.query}&page=${(this.paginationData.page - 1)}`).subscribe((res:SearchResponse ) => {
      this.articles = res.hits.map(item => {
        item.num_votes = this.articleLocalData && this.articleLocalData[item.objectID]?.votes ? this.articleLocalData[item.objectID].votes : 0;
        item.is_hidden = this.articleLocalData && this.articleLocalData[item.objectID]?.hidden ? this.articleLocalData[item.objectID].hidden : false;
        return item; 
      }).filter(item=> !item.is_hidden );

      this.paginationData.nbPages = res.nbPages;
    })
  }

  /**
   * 
   * @param row Article Object
   * @returns void
   * Sends to article details page
   */
  gotoArticle(row:ArticleComplete): void {
    this._route.navigate(['article/'+row.objectID])
  }

  /**
   * 
   * @param ev Mouase Event to stop propagation
   * @param row Article object
   * @param type vote type can either be up or down
   * Vote up the article for user
   */  
  doVote(ev:MouseEvent, row:ArticleComplete, type:'up' | 'down'): void{
    ev.stopPropagation();
    row.num_votes = row.num_votes? ++row.num_votes : 1;
    this.articleLocalData = { ...this.articleLocalData, [row.objectID] : { votes: row.num_votes} };
    localStorage.setItem("articles", JSON.stringify(this.articleLocalData));
  }

  /**
   * 
   * @param ev Mouse Event to stop propagation
   * @param row Article Object
   * @param index row index
   * @returns void
   * Hide the article for user
   */
  hideArticle(ev:MouseEvent, row:ArticleComplete, index:number): void{
    ev.stopPropagation();
    this.articleLocalData = { ...this.articleLocalData, [row.objectID] : { hidden:true} };
    localStorage.setItem("articles", JSON.stringify(this.articleLocalData));
    this.articles.splice(index, 1);
    this.articles = [...this.articles]
  }

  pageChanged(ev:PageEvent): void{
    this.paginationData.page = ev.pageIndex;
    this._route.navigate([], {
        queryParams: {
          page : ev.pageIndex + 1,
          query : this.query
        },
        relativeTo: this._activatedRoute
    });
  }

  doSearch(query:string): void{
    this._route.navigate([], {
      queryParams: {
        page : 1,
        query : query
      },
      relativeTo: this._activatedRoute
  });
  }

}
