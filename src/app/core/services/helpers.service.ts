import { Injectable, Component } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  constructor(public _snackBar: MatSnackBar) {}

  emailValidator(control) {
    const reEmail: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (control.value) {
      const matches = control.value.match(reEmail);
      return matches ? null : { invalidEmail: true };
    } else {
      return null;
    }
  }

  snackbarOpenFromText(message: string, action: string, options: MatSnackBarConfig = {}): MatSnackBarRef<SimpleSnackBar> {
    return this._snackBar.open(message, action, options);
  }

  snackbarOpenFromComponent(component: any, options: MatSnackBarConfig = {}): MatSnackBarRef<any> {
    return this._snackBar.openFromComponent(component, options);
  }
}
