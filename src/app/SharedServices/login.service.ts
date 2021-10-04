import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  userName = new Subject<string>();

  loginForAll(body: {}) {
    return this.http.post('http://localhost:4500/login', body);
  }




}
