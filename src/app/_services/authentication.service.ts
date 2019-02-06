import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import { IUser } from '../User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
  configurl=""
  Login(username: string, password: string):Observable<IUser>
  {
      console.log(username,password)
    return this.http.get<IUser>(this.configurl);
  }
}
    
