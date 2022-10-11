import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http : HttpClient) { }

  baseServerUrl = "https://localhost:8081/";

  registerUser(user: Array<string | null | undefined>) {
   return this.http.post(this.baseServerUrl + user , {
    FirstName: user[0],
    LastName: user[1],
    Email: user[2],
    Mobile: user[3],
    Address: user[4],
    Password: user[5]
   }, 
   {
     responseType:'text',
   });
  }
}
