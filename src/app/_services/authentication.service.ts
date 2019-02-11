import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import { IUser, MobileList } from '../User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

   configurl="http://localhost:62152/api/Login"
   Login(username:IUser):Observable<Boolean>
   {
     return this.http.post<Boolean>(this.configurl,username);
   }
  //  url="http://localhost:62152/api/MobileList"
  //  ResourceList():Observable<MobileList>
  //  {
  //    return this.http.get<MobileList>(this.url);
  //  }
}
    
