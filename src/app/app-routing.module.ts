import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { FeedComponent } from './modules/home/components/feed/feed.component';
import { ArticleComponent } from './modules/home/components/article/article.component';


const routes: Routes = [
  {
    path : '',
    // loadChildren :  () => import('./modules/home/home.module').then(m => m.HomeModule)
    children : [
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
