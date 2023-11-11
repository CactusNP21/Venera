import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {log} from "util";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private fb: FormBuilder) {
  }

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  get password() {return this.loginForm.controls.password}

}
