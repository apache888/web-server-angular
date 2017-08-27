
import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Developer} from './dev';
import {AuthenticationService} from '../security/authentication.service';

@Injectable()
export class DevService {

  private entity_url = environment.REST_API_URL + 'devs';
  private headers = new Headers({'Content-Type': 'application/json',
                                  'Accept': 'application/json',
                                  'X-Auth-Token': this.authService.getToken()});

  constructor(private _http: Http, private authService: AuthenticationService) {
  }

  getDevs(): Observable<Developer[]> {
    return this._http.get(this.entity_url, {headers: this.headers})
      .map((response: Response) => <Developer[]> response.json())
      .catch(this.handleError);
  }

  getDevById(devId: string): Observable<Developer> {
    return this._http.get((this.entity_url + '/' + devId), {headers: this.headers})
      .map((response: Response) => <Developer> response.json())
      .catch(this.handleError);
  }

  addDev(dev: Developer): Observable<Developer> {
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json;charset=UTF-8');
    // headers.append('Accept', 'application/json');
    // const options = new RequestOptions({headers: headers});
    return this._http.post(this.entity_url, JSON.stringify(dev), {headers: this.headers})
      .map((response: Response) => <Developer> response.json())
      .catch(this.handleError);
  }

  updateDev(devId: string, dev: Developer): Observable<Developer> {
    const body = JSON.stringify(dev);
    // const headers = new Headers({'Content-Type': ' application/json;charset=UTF-8'});
    // const options = new RequestOptions({headers: headers});
    return this._http.put((this.entity_url + '/' + devId), body, {headers: this.headers})
      .map((response: Response) => response)
      .catch(this.handleError);
  }

  deleteDev(devId: string): Observable<Developer> {
    return this._http.delete((this.entity_url + '/' + devId), {headers: this.headers})
      .map((response: Response) => <Developer> response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.log('handleError log: ');
    let errMsg: string;
    if (error instanceof Response) {
      if (!(error.text() === '' )) {  // if response body not empty
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        console.log('binding errors header not empty');
        errMsg = error.headers.get('errors').toString();
      }
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
