import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from './email.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  REST_API = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  sendEmail(emailOptions:Email): Observable<any> {
    const url = `${this.REST_API}/email`;
    return this.http.post(url,emailOptions,{responseType: 'text'});
  }
}
