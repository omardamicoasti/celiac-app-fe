import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL: string = 'http://127.0.0.1:8080'
  
  constructor(private _http: HttpClient) { }

  getAllUsers() {
    return this._http.get<User[]>(`${this.baseURL}/generic/user`)
  }
   
}


