import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {provideRouter, RouterLink, RouterModule, RouterOutlet, Routes} from "@angular/router";
import {LoginRoutes} from "./login.routes";
import {AuthService} from "./services/auth.service";



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatIconModule, RouterLink, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private auth: AuthService) {
  }

  loginForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  login() {
    if (this.loginForm.valid) {
      const data = this.loginForm.getRawValue()
      console.log(1)
      this.auth.login(data).subscribe(value => {
        console.log(value)
      })
    }
  }

}
