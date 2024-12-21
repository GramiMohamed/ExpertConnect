import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth'; // Backend API URL
  private isLoggedIn = false;

  constructor(private http: HttpClient, private router: Router) {}

  // Register a new user
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  // Login user and store token in local storage
  login(credentials: any): Observable<any> {
    return new Observable((observer) => {
      this.http.post(`${this.apiUrl}/login`, credentials).subscribe(
        (response: any) => {
          if (response.token) {
            this.isLoggedIn = true;
            localStorage.setItem('token', response.token); // Store JWT token
            localStorage.setItem('user', JSON.stringify(response.user)); // Store user info
            observer.next(response);
          } else {
            observer.error('Login failed!');
          }
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }

  // Check if the user is authenticated (based on presence of token)
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // Returns true if token exists, else false
  }

  // Log out user and clear local storage
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.router.navigate(['/login']); // Redirect to login page after logout
  }

  // Check if the user has expert status and redirect to appropriate page
  checkExpertStatus(): void {
    const user = this.getUserDetails();
    if (user?.isExpert) {
      this.router.navigate(['/dashboard-expert']);
    } else {
      this.router.navigate(['/dashboard']); // For non-experts
    }
  }

  // Become an expert by sending data to the backend
  becomeExpert(expertData: any): Observable<any> {
    const user = this.getUserDetails();
    const userId = user ? user.id : null;
    return this.http.post(`${this.apiUrl}/become-expert`, {
      ...expertData,
      userId,
    });
  }

  // Get protected resource (e.g., private API data)
  getProtectedResource(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/protected`, { headers });
  }

  // Retrieve user details (can be fetched from backend or local storage)
  getUserDetails(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null; // Return parsed user details or null if not found
  }

  // Optional: You can add an endpoint to get the user details directly from the backend
  getUserDetailsFromBackend(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/user-details`, { headers });
  }
}
