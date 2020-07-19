import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { ConfirmDialogConfig } from '../models';

@Component({
  selector: 'app-message-dialog',
  template: `
    <h5 *ngIf="data.title" mat-dialog-header>{{ data.title }}</h5>
    <div mat-dialog-content *ngIf="data.body">
      {{ data.body }}
    </div>
    <mat-divider></mat-divider>
    <div mat-dialog-actions>
      <div class="btn-container">
        <button
          mat-raised-button
          style="margin-right:15px;"
          class="dark btn"
          (click)="emitEvent(data.positiveEventValue)"
        >
          Yes
        </button>
        <button
          mat-button
          class="light btn"
          (click)="emitEvent(data.negativeEventValue)"
        >
          No
        </button>
      </div>
    </div>
  `,
  styles: ['.btn-container{width:100%; border:0} h2{text-align: center}']
})
export class ConfirmDialogComponent implements OnInit {
  @Output() onButtonClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogConfig
  ) {}

  ngOnInit() {
    this.data = { ...new ConfirmDialogConfig(), ...this.data };
  }

  /**
   *
   */
  emitEvent(val: any): void {
    this.onButtonClick.emit(val);
    this.dialogRef.close();
  }
}
