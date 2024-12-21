import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  loading = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.loading = true;
    const credentials = { email: this.email.trim(), password: this.password.trim() };

    this.authService.login(credentials).subscribe(
      (response) => {
        this.loading = false;
        console.log('Login successful:', response);

       
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userData', JSON.stringify(response.user));

        // Redirect based on isExpert
        if (response.user.isExpert) {
          this.router.navigate(['/dashboardExpert']);
        } else {
          this.router.navigate(['/dashboard']);
        }
      },
      (error) => {
        this.loading = false;
        console.error('Login failed:', error);
        alert('Invalid credentials! Please check your email and password.');
      }
    );
  }
}
