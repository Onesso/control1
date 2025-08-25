import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    NgbCarouselModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public showPassword: boolean = false;

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  images: string[] = ['image2.png', 'image3.png', 'image.png'];

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  submitLoginForm() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log(this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }
}
