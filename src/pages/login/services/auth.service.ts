import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {server} from "../../../constants";

interface LoginCredential {
  username: string
  password: string
}

 export interface RegisterCredential extends LoginCredential {
  name: string
  email: string
}

type Token = string

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: LoginCredential) {
    return this.http.post<Token>(`${server}/api/auth/login`, data)
  }

  register(data: RegisterCredential) {
    return this.http.post<Token>(`${server}/api/users`, data)
  }

}
