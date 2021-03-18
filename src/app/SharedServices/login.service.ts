import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  loginForAll(body: {}) {
    return this.http.post('http://localhost:4500/login', body);
  }

}
