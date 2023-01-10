import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  REST_API = 'http://localhost:8080/api';


  constructor(private http: HttpClient) {}


  createUser(user:User): Observable<User> {
    return this.http.post(`${this.REST_API}`,user);
  }

  getRegisteredUser(email: User, password: User): Observable<any> {
    return this.http.get<User[]>(`${this.REST_API}?email=${email}&password=${password}`);
  }
}
