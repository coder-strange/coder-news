import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreHttpService } from './services/core.http.service';
import { LoaderService } from './services/loader-service/loader.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, LoaderComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    // MatProgressSpinnerModule,
    // MatIconModule,
    SharedModule,
    RouterModule
  ],
  providers : [
    LoaderService,
    CoreHttpService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ],
  exports : [
    LoaderComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
