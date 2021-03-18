import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  registrationUser(body: {}) {
    return this.http.post('http://localhost:4500/register', body);
  }

  showUserDetails() {
    return this.http.get('http://localhost:4500/getUser');
  }
  

}
