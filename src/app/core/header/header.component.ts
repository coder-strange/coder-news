import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar id="header" color="primary" color="primary">
      <button routerLink="/" mat-icon-button class="example-icon" aria-label="icon-button with menu icon to goto home" >
        <mat-icon>menu</mat-icon>
      </button>
      <span aria-label="Site Title">Coder News</span>
      <span class="spacer"></span>
      <button mat-icon-button class="example-icon favorite-icon" aria-label="icon-button with heart icon">
        <mat-icon>favorite</mat-icon>
      </button>
      <button mat-icon-button class="example-icon" aria-label="icon-button with share icon">
        <mat-icon>share</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
