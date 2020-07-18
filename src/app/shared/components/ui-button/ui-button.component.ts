import { ActionButton, ActionButtonEvent } from '../../models';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
   <button mat-button [type]="[ control.isSubmit ? 'submit' : 'button' ]" *ngIf="control" [class]="'mat-' + control.type + '-button mat-' + control.color"
      (click)="[control.action !== undefined ? eventVal ? control.action(eventVal) : control.action() : null]" [title]="control.title"  [attr.aria-label]="control.title">
      <mat-icon fontSet="material-icons-outlined">{{ control.icon }}</mat-icon> {{ control.text }}
  </button>
  `,
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent {

  @Input() control: ActionButton;
  @Input() eventVal: ActionButtonEvent;

}
