import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-expert',
  templateUrl: './dashboard-expert.component.html',
  styleUrls: ['./dashboard-expert.component.css'],
})
export class DashboardExpertComponent {
  expertName: string = '';

  constructor(private router: Router) {
    // Récupérer les données de l'utilisateur depuis localStorage
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.expertName = userData.name || 'Expert';
  }

  // Fonction pour naviguer vers la page des consultations
  viewConsultations() {
    this.router.navigate(['/consultations']);
  }

  // Fonction pour naviguer vers la page de gestion du profil
  manageProfile() {
    this.router.navigate(['/profile']);
  }
}
