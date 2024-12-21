import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  userName: string = '';
  isExpert = false; // Dynamically set this based on user data

  constructor(private router: Router ,private authService: AuthService) {}

  navigateToExpertForm() {
    this.router.navigate(['/become-expert']);
  }
  ngOnInit(): void {
    // Appel pour récupérer les détails de l'utilisateur depuis le backend
    this.getUserDetailsFromBackend();
  }

  // Récupérer les détails de l'utilisateur depuis le backend
  getUserDetailsFromBackend(): void {
    this.authService.getUserDetailsFromBackend().subscribe(
      (response) => {
        this.userName = response.name; // Mettre à jour le nom de l'utilisateur
      },
      (error) => {
        console.error('Erreur lors de la récupération des informations utilisateur', error);
      }
    );
  }
}
