import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  REST_API = 'http://localhost:8080/api';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  createContact(contact: Contact): Observable<any> {
    const url = `${this.REST_API}/add-contact`;
    return this.httpClient.post(url,contact);
  }
}
