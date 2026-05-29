import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    this.errorMessage = '';
    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor completa todos los campos.';
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/dashboard']);
    }, 1200);
  }

  loginDemo(role: 'admin' | 'profesor' | 'estudiante'): void {
    const credentials: Record<string, { email: string; password: string }> = {
      admin:       { email: 'admin@educontrol.pe',      password: 'admin123' },
      profesor:    { email: 'profesor@educontrol.pe',   password: 'prof123'  },
      estudiante:  { email: 'estudiante@educontrol.pe', password: 'est123'   },
    };
    this.email    = credentials[role].email;
    this.password = credentials[role].password;
    this.onSubmit();
  }

  forgotPassword(): void {
    this.router.navigate(['/forgot-password']);
  }
}