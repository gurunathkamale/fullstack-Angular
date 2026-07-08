import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';


@Injectable({
  providedIn: 'root',
})
export class UserService {

  private api = environment.apiUrl;

  constructor(private http: HttpClient){}

  getUsers(){
    return this.http.get(`${this.api}/users/`)
  }

  register(data: any){
    return this.http.post(`${this.api}/users/`, data)
  }

  login(data: any){
    return this.http.post(`${this.api}/users/login`, data)
  }
  
}
