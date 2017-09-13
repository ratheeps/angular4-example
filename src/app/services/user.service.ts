import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user';

@Injectable()
export class UserService {
  private headers;
  private options;
  private apiUrl;
  constructor(private http: Http, private authService: AuthService) {
    this.apiUrl = environment.apiUrl;
  }

  getUsers(): Observable<User[]> {
    this.headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.accessToken });
    this.options = new RequestOptions({ headers: this.headers });
    return this.http.get(this.apiUrl + '/api/users', this.options)
      .map((response: Response) => response.json());
  }
}
