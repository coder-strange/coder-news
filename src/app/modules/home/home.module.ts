import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { ChartsModule } from 'ng2-charts';
import { FeedComponent } from './components/feed/feed.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { CommentComponent } from './components/comment/comment.component';
import { TimelineComponent } from './components/timeline/timeline.component';


const moduleRoutes: Routes = [
  {path: '', redirectTo: 'feed', pathMatch: 'full'}, 
  {
    path : 'feed',
    redirectTo : 'feed'
  },
  {
    path : 'feed',
    component : FeedComponent
  },
  {
    path : 'article/:id',
    component : ArticleComponent
  }
];
@NgModule({
  declarations: [FeedComponent, ArticleComponent, CommentComponent, TimelineComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatExpansionModule,
    ChartsModule,
    RouterModule.forChild(moduleRoutes)
  ]
})
export class HomeModule { }
