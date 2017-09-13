import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CountryService {
  baseUrl;
  constructor(private http: Http) {
    this.baseUrl = environment.apiUrl;
  }

  get() {
    return this.http.post(this.baseUrl + '/api/countries/', JSON.stringify({  }))
      .map((response: Response) => {
        return response;
      });
  }
}
