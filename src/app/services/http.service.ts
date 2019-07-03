import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment} from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
  apiUrl: string;

  constructor(
    private http: HttpClient,
  ) {
    this.apiUrl = 'https://jsonplaceholder.typicode.com';
  }

  get(url): Observable<any> {
    return this.http.get<any>(this.apiUrl + url);
  }
  post(url, params?: any, headers?: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + url, params, headers);
  }

}
