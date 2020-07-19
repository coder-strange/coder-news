import { Component, OnInit, ViewChild } from '@angular/core';
import { CoreHttpService } from 'src/app/core/services/core.http.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models';
import { MatAccordion } from '@angular/material/expansion';
import { ActionButton } from 'src/app/shared/models';
import { LoaderService } from 'src/app/core/services/loader-service/loader.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  private isAllAccordionOpen = true;
  public article: Article;

  public actionBtns: ActionButton[] = [
    {
      type: 'icon',
      title: this.isAllAccordionOpen ? 'Collaps All' : 'Expand All',
      icon: this.isAllAccordionOpen ? 'indeterminate_check_box' : 'add_box',
      color: 'primary',
      action: () => {
       this.manageExpansionPanels();
      }
    },
  ];
  constructor(private _http: CoreHttpService,
              private _acRoute: ActivatedRoute,
              private metaTagService: Meta,
              private titleService: Title) { }

  ngOnInit(): void {
    this._acRoute.params.subscribe(param => {

      if (param.id){
        this.fetchDetails(param.id);
      }
    });
  }

  /**
   *
   * @param id Article Id
   * @return void
   */
  fetchDetails(id: number): void{
    this._http.get('v1/items/' + id).subscribe((article: Article) => {
        this.article = article;
        this.setMeta();
    });
  }

  setMeta(): void{
    this.metaTagService.addTags([
      { name: 'keywords', content: this.article.title },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: this.article.author },
      { name: 'date', content: new Date().toLocaleDateString(), scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);

    this.titleService.setTitle('Coder News | ' + this.article.author );
    this.metaTagService.updateTag(
      { name: 'description', content: 'Coder News feed, article' }
    );
  }

  /** Method to set Accordian button icon dynamically */
  setAccordianIcon() {
    if (!this.isAllAccordionOpen) {
      this.actionBtns[0] = {
        title: 'Expand all Panel',
        type: 'icon',
        color: 'primary',
        icon: 'add_box',
        action: () => {
          this.manageExpansionPanels();
        }
      };
    } else {
      this.actionBtns[0] = {
        title: 'Collapse all',
        type: 'icon',
        color: 'primary',
        icon: 'indeterminate_check_box',
        action: () => {
          this.manageExpansionPanels();
        }
      };
    }
  }

  /** Method for manage Expansion Panels */
  manageExpansionPanels() {
    this.isAllAccordionOpen ? this.accordion.closeAll() : this.accordion.openAll();
    this.isAllAccordionOpen = !this.isAllAccordionOpen;
    this.setAccordianIcon();
  }
}
