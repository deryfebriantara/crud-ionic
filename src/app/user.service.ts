import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
api_url = environment.apiUrl


  constructor(
    private http: HttpClient
  ) { }

  getUser(){
    return this.http.get(`${this.api_url}/user`)
  }

  login(credential){
    return this.http.post(`${this.api_url}/auth/login`, credential)
  }
}
