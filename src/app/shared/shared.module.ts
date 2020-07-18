import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { ConfirmDialogComponent } from './confirm/confirm-modal.component';


@NgModule({
  declarations : [ TitleBarComponent, UiButtonComponent, DateAgoPipe, ConfirmDialogComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TitleBarComponent,
    UiButtonComponent,
    DateAgoPipe,
    ConfirmDialogComponent
  ],
  providers: [],
})

export class SharedModule {}
