import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user!:User;
  private baseURL: string = 'http://127.0.0.1:8080/'
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'GET,POST,PUT,DELETE,OPTIONS',
      'Content-Type' : 'application/json'
    })
  }
  constructor(private _http: HttpClient) { }

  private errorHandler<T>(operation = 'Operazione', result?: T) {
    return(error:any):Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of (result as T);
    }
  }

  getUsers():Observable<User> {
    return this._http.get<User>(`${this.baseURL}/generic/user`)
  }
 
}

// getUsers():Observable<any> {
//     console.log("ciao");
//     return this._http.get(this.baseURL+'generic/user',this.httpOptions).pipe(
//       map((response => response)),
//       catchError(this.errorHandler<any>('Get users')));
//   }
