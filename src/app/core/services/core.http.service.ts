import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoreHttpService {

  private apiBaseURL: string = environment.apiBaseURL;

  constructor(private _http: HttpClient) { }

  /**
   * HTTP GET Method
   * @param enpoint string
   */
  get(enpoint: string): Observable<any> {
    return this._http.get(this.apiBaseURL + enpoint);
  }

  /**
   * HTTP POST Method
   * @param enpoint string
   * @param data any
   *
   */
  post(enpoint: string, data: any): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this._http.post(this.apiBaseURL + enpoint, data, {headers});
  }
  /**
   * HTTP PUT Method
   * @param enpoint string
   * @param data any
   *
   */
  put(enpoint: string, data: any): Observable<any> {
    return this._http.put(this.apiBaseURL + enpoint, data);
  }

  /**
   * HTTP DELETE Method
   * @param enpoint string
   * @param data any
   *
   */
  delete(enpoint: string): Observable<any> {
    return this._http.delete(this.apiBaseURL + enpoint);
  }

}
