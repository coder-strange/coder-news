import { Component, OnInit, Input, ChangeDetectorRef, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Article } from '../../models';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent{
  @Input() comment: Article;
}
