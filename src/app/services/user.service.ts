import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthService } from '../services/auth.service';
import { User } from '../model/user';
@Injectable()
export class UserService {
  private headers;
  private options;
  constructor(private http: Http, private authService: AuthService) { }

  getUsers(): Observable<User[]> {
    this.headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
    this.options = new RequestOptions({ headers: this.headers });
    return this.http.get('/api/users', this.options)
      .map((response: Response) => response.json());
  }
}
