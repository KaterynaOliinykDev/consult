import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  REST_API = 'http://localhost:8080/api';


  constructor(private http: HttpClient) {}


  createContact(contact:Contact): Observable<Contact> {
    const url = `${this.REST_API}/add-contact`;
    return this.http.post(url,contact);
  }
}
