import { Component, OnInit, ViewChild } from '@angular/core';
import { CoreHttpService } from 'src/app/core/services/core.http.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models';
import { MatAccordion } from '@angular/material/expansion';
import { ActionButton } from 'src/app/shared/models';
import { MockArticle } from '../../mocks/article-details';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  private isAllAccordionOpen:boolean = true;
  actionBtns: ActionButton[] = [
    {
      type: 'icon',
      title: this.isAllAccordionOpen ? "Collaps All" : "Expand All",
      icon: this.isAllAccordionOpen ? "indeterminate_check_box" : "add_box",
      color: "primary",
      action: () => {
        console.log("SDFDSF")
       this.manageExpansionPanels();
      }
    },
  ]
  public article:Article;
  constructor(private _http:CoreHttpService, private _acRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._acRoute.params.subscribe(param=>{

      if(param.id)  
        // this.fetchDetails(param.id)
        this.article = MockArticle
    });
  }

  /**
   * 
   * @param id Article Id
   * @return void
   */
  fetchDetails(id:number): void{
    this._http.get("v1/items/" + id).subscribe((article: Article) => {
        this.article = article;
        console.log(this.article)
    })
  }

  /** Method to set Accordian button icon dynamically */
  setAccordianIcon() {
    if (!this.isAllAccordionOpen) {
      this.actionBtns[0] = {
        title: "Expand all Panel",
        type: "icon",
        color: "primary",
        icon: "add_box",
        action: () => {
          this.manageExpansionPanels();
        }
      };
    } else {
      this.actionBtns[0] = {
        title: "Collapse all",
        type: "icon",
        color: "primary",
        icon: "indeterminate_check_box",
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
