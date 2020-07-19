import { ElementRef } from '@angular/core';
export interface ActionButton {
  text?: string;
  title?: string;
  type: 'raised' | 'icon' | 'stroked';
  icon: string;
  color?: 'primary' | 'accent' | 'warn';
  isSubmit?: boolean;
  action?($event?: ActionButtonEvent): void;
}

export interface ActionButtonEvent{
  data?: any;
  index?: number;
  element?: ElementRef;
}
