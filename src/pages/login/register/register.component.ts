import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {RouterLink} from "@angular/router";
import {AuthService, RegisterCredential} from "../services/auth.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, private auth: AuthService) {
  }

  registerForm = this.fb.nonNullable.group({
    email: ['', Validators.email],
    name: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.min(1)]
  })

  register() {
    if (this.registerForm.valid) {
      const s = this.registerForm.getRawValue()
      this.auth.register(s).subscribe(value => {
        console.log(value)
      })
    }
  }


  //this.auth.register(s)

}
