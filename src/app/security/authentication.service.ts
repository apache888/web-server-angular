import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
  private authUrl = environment.SERVER_URL + 'auth';
  private headers = new Headers({'Content-Type': 'application/json',
                                  'Accept': 'application/json'});

  constructor(private http: Http) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(this.authUrl, JSON.stringify({username: username, password: password}), {headers: this.headers})
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const token = response.json() && response.json().token;
        if (token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getToken(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const token = currentUser && currentUser.token;
    return token ? token : '';
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    const token: String = this.getToken();
    return token && token.length > 0;
  }
}
