import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/Client';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http : HttpClient) { }

  baseServerUrl = "http://localhost:7098/user";

  registerUser(client?: Client):Observable<Object> {
   return this.http.post<Object>(this.baseServerUrl,client,{responseType:'text' as 'json'});
  }
}
