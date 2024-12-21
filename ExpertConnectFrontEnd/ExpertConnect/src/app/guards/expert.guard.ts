import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ExpertGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Retrieve the user from AuthService (using getUserDetails method)
    const user = this.authService.getUserDetails();

    // Check if the user exists and is an expert
    if (user && user.isExpert) {
      return true; // Allow access to the expert page
    }

    // Redirect to regular dashboard if not an expert
    this.router.navigate(['/dashboard']);
    return false;
  }
}
