import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {
  public accessToken: string;
  public refreshToken: string;
  public apiUrl: string;
  public grantType: string;
  public clientId: string;
  public clientSecret: string;
  public currentUser;

  constructor(private http: Http) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.accessToken = this.currentUser && this.currentUser.access_token;
    this.accessToken = this.currentUser && this.currentUser.refresh_token;
    this.apiUrl = environment.apiUrl;
    this.grantType = environment.grantType;
    this.clientId = environment.clientId;
    this.clientSecret = environment.clientSecret;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(this.apiUrl + '/oauth/token', JSON.stringify({
      username: username,
      password: password,
      grant_type: this.grantType,
      client_id: this.clientId,
      client_secret: this.clientSecret
    }))
      .map((response: Response) => {
        this.accessToken = response.json() && response.json().access_token;
        this.refreshToken = response.json() && response.json().refresh_token;
        if (this.accessToken) {
          localStorage.setItem('currentUser', JSON.stringify({
            username: username,
            access_token: this.accessToken,
            refresh_token: this.refreshToken
          }));
          return true;
        } else {
          return false;
        }
      });
  }

  logout(): void {
    this.accessToken = null;
    this.refreshToken = null;
    localStorage.removeItem('currentUser');
  }
}
