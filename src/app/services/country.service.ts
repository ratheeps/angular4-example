import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CountryService {
  apiUrl;
  constructor(private http: Http) {
    this.apiUrl = environment.apiUrl;
  }

  get(): Observable<any> {
    return this.http.post(this.apiUrl + '/api/countries/', JSON.stringify({ }))
      .map((response: Response) => {
        return response;
      });
  }
}
