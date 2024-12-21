import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  isExpert = false; // Exemple de valeur, ajustez selon votre logique.

  constructor(private router: Router) {}

  navigateToExpertForm() {
    this.router.navigate(['/become-expert']); // Changez '/expert-form' avec la route souhaitée.
  }
}
