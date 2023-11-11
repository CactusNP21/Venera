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
    this.http.post<Token>(`${server}/api/auth/login`, data).subscribe
  }

  register(data: RegisterCredential) {
    return this.http.post<Token>(`${server}/api/user`, {
      "username": data.username,
      "email": data.email,
      "password": data.password,
      "confirmPassword": data.password
    })
  }

}
