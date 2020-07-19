import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/Http';
import { TestBed, tick, fakeAsync } from '@angular/core/testing';

import { CoreHttpService } from './core.http.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('CoreService', () => {
  let service: CoreHttpService;
  let httpMock: HttpTestingController;
  const apiBaseURL: string = environment.apiBaseURL;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [
      ]
    });

    service = TestBed.inject(CoreHttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send client data vie POST', fakeAsync(() => {
    const dummyData = {
      id: 0,
      ClientCode: 'admin01',
      ClientName: 'Mobile08',
      ClientProgramNumber: 'rfsca456',
      relapsePeriodInDays: 20,
      totalNumberOfEmployees: 20,
      totalNumberOfEmployeesPerLocation: 'PS-303',
      ClientContact: {
        PhoneNumber1: '(443) 545-4643',
        PhoneNumber2: '(542) 356-7678',
        MobileNumber: '(431) 563-8777',
        EmailId: 'test@test.com',
        SecondaryEmailId: 'test@test.com',
        Fax: '54e16378'
      },
      ClientAddress: {
        Street1: 'Sector63',
        Street2: 'Noida',
        Street3: 'Delhi',
        City: 'Noida',
        State: 'TX',
        Country: 'IN',
        ZipCode: '453365'
      },
      BenefitIdentifiers: ['BA']
    };
    service.post('client/add', dummyData).subscribe(response => {
    });
    const request = httpMock.expectOne(`${apiBaseURL}client/add`);
    expect(request.request.url).toBe(`${apiBaseURL}client/add`);
    expect(request.request.body).toEqual(dummyData);
    expect(request.request.method).toBe('POST');
    request.flush({});
    httpMock.verify();
    tick();
  }));

  it('should delete() method called for deleting client via DELETE', fakeAsync(() => {
    const clientId = 2;
    service.delete('client/delete/' + clientId).subscribe(response => {
      // console.log(response);
    });

    const request = httpMock.expectOne(`${apiBaseURL}client/delete/${clientId}`);
    expect(request.request.url).toBe(`${apiBaseURL}client/delete/${clientId}`);
    expect(request.request.method).toBe('DELETE');
    request.flush({});
    httpMock.verify();
    tick();
  }));

  it('should get() method called for get data via GET', fakeAsync(() => {
    service.get('getclient').subscribe(response => {
      // console.log(response);
    });

    const request = httpMock.expectOne(`${apiBaseURL}getclient`);
    expect(request.request.url).toBe(`${apiBaseURL}getclient`);
    expect(request.request.method).toBe('GET');
    request.flush({});
    httpMock.verify();
    tick();
  }));

  it('should put() method called for getclient update via PUT', fakeAsync(() => {
    const data = {};
    service.put('endpoint', data).subscribe(response => {
      // console.log(response);
    });

    const request = httpMock.expectOne(`${apiBaseURL}endpoint`);
    expect(request.request.url).toBe(`${apiBaseURL}endpoint`);
    expect(request.request.method).toBe('PUT');
    request.flush({});
    httpMock.verify();
    tick();
  }));
});

