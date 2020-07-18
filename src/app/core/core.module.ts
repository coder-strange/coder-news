import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
// import { AppStoreService } from '@store';
import { HelpersService } from './services/helpers.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreHttpService } from './services/core.http.service';
import { LoaderService } from './services/loader-service/loader.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
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
    HelpersService,
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
