import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from './constants';
import { User } from '../users';

@Injectable({
  providedIn: 'root'
})
export class DataRequestService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    const url = `${API_URLS.getUsers}?pagination=10`;
    const headers = { 'Accept': 'text/plain' };
    return this.http.get<any>(url, { headers });
  }

  public getUsersExists(userName: string): Observable<any> {
    const url = `${API_URLS.userExists}?userName=${userName}`;
    const headers = { 'Accept': 'text/plain' };
    return this.http.get<any>(url, { headers });
  }

  public createUser(user: User): Observable<any> {
    const url = `${API_URLS.createUser}`;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.http.post(url, user, { headers });
  }

  public updateUserPoints(user: User): Observable<any> {
    const url = `${API_URLS.updateUserPoints}`;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.http.post(url, user, { headers });
  }
  
}
