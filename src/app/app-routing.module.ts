import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { FeedComponent } from './modules/home/components/feed/feed.component';
import { ArticleComponent } from './modules/home/components/article/article.component';


const routes: Routes = [
  {
    path: '',
    // loadChildren :  () => import('./modules/home/home.module').then(m => m.HomeModule) //Comment it for Faster Inital Paint
    // Route for Faster Inital Paint
    children: [
      { path: '', component: FeedComponent },
      {
        path: 'feed',
        component: FeedComponent
      },
      {
        path: 'article/:id',
        component: ArticleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
