import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private authService: AuthService) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const userData = { name: this.name, email: this.email, password: this.password };
    console.log('User Data Sent:', userData);  // Log the user data being sent to backend

    this.authService.register(userData).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        alert('Registration successful!');
      },
      (error) => {
        console.error('Registration failed:', error);
        if (error.error && error.error.errors) {
          // Handle validation errors from backend
          let errorMsg = 'Registration failed! ';
          error.error.errors.forEach((err: any) => {
            errorMsg += `\n${err.msg}`;
          });
          alert(errorMsg);
        } else {
          alert(`Registration failed: ${error.message || error.error.message}`);
        }
      }
    );
  }

}
