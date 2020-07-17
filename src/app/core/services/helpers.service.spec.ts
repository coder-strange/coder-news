import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from './../../modules/design/material.module';
import { TestBed } from '@angular/core/testing';

import { HelpersService } from './helpers.service';
import { CustomSnackbarComponent } from '@modules/shared/components/customsnackbar/customsnackbar.component';

describe('HelpersService', () => {
  let service: HelpersService;
  let a;
  let b;
  let c;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomSnackbarComponent],
      imports: [MaterialModule],
      providers: [{ provide: MatSnackBar, useValue: {} }]
    }).compileComponents();
    a = 'Test';
    b = 'X';
    c = 'suc';
    service = TestBed.inject(HelpersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not validateEmail', () => {
     const email = new FormControl();
     email.patchValue('random string');
     service.emailValidator(email);
     expect(service.emailValidator(email).invalidEmail).toBeTruthy();
  });

  it('should validateEmail', () => {
    const email = new FormControl();
    email.patchValue('jhapriti@gmail.com');
    service.emailValidator(email);
    expect(service.emailValidator(email)).toBeNull();
  });
});
