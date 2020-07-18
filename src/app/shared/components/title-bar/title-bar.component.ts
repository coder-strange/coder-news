import { Component, Input, Inject, AfterViewInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActionButton } from '../../models';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-title-bar',
  template: `
        <mat-toolbar id="page-control">
        <!-- Page Title -->
          <span id="page-title">{{title}}</span>

          <span style="flex: 1 1 auto"></span>
          <mat-form-field *ngIf="enableSearch" class="search-box" color="accent">
            <input #searchElm aria-label="Search" matInput placeholder="Search..." [value]="searchString">
          </mat-form-field>
          <!-- Page Controls  -->
          <div id="controls">
            <ui-button *ngFor="let c of actions" [control]="c"></ui-button>
          </div>
        </mat-toolbar>
        <button type="button" aria-control="content" aria-label="Go to Top of the Page" title="Jump to top" *ngIf="jumpScroller && jumScrollerStatus" mat-icon-button class="jump-scroll" (click)="jumpScroll($event)">
          <mat-icon>arrow_upward</mat-icon>
        </button>
  `,
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements AfterViewInit{
  @ViewChild('searchElm') searchElm: ElementRef;
  @Input() title = '';
  @Input() actions: ActionButton[] = [];
  @Input() searchString: string;
  @Input() jumpScroller: boolean = false;
  @Input() enableSearch: boolean = false;
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();
  private _contentArea:HTMLElement;
  public jumScrollerStatus:boolean = false;
  constructor(@Inject(DOCUMENT) private _document: Document){}

  ngAfterViewInit(): void{

      if(this.jumpScroller){
        this._contentArea = this._document.getElementById("content");
        this._contentArea.onscroll = (ev:any)=>{
          if (ev.srcElement.scrollTop > 100 ) {
            this.jumScrollerStatus = true;
          } else {
            this.jumScrollerStatus = false;
          }
        }
      }

      if(this.enableSearch){
        this.subscribeFilter();
      }
  }

  subscribeFilter(): void {
    fromEvent(this.searchElm.nativeElement, 'keyup')
      .pipe(
        map((event: any) => {
          return event.target.value;
        }),
        // filter(res => res.length > 2),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((text: string) => {
        this.filter.next(text);
      });
  }

  public jumpScroll(ev:MouseEvent): void{
    this._contentArea.scrollTop = 0;
    this.jumScrollerStatus = false;
  }
}
