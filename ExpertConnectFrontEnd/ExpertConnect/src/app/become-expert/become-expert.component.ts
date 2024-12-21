import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-become-expert',
  templateUrl: './become-expert.component.html',
  styleUrls: ['./become-expert.component.css'], // Corrected to styleUrls
})
export class BecomeExpertComponent implements OnInit {
  expertiseDomain = '';
  experience = '';
  rates = '';
  selectedFile: File | null = null;
  userEmail: string = ''; // Define the userEmail property

  // Inject Router for navigation and AuthService for API calls
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Fetch the logged-in user's email when the component is initialized
    this.authService.getUserDetails().subscribe(
      (userDetails: any) => {
        this.userEmail = userDetails.email; // Assuming the response has an `email` field
      },
      (error: any) => {  // Explicitly typing 'error' as 'any'
        console.error('Error fetching user details:', error);
        alert('Une erreur est survenue lors de la récupération des détails de l\'utilisateur.');
      }
    );
  }

  // Navigation method (if you need to navigate within the component)
  goToExpertForm(): void {
    this.router.navigate(['/become-expert']);
  }

  // Handle file selection
  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0]; // Save the selected file
  }

  // Handle form submission to become an expert
  onSubmit(): void {
    if (!this.expertiseDomain || !this.experience || !this.rates || !this.selectedFile) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // Create a new FormData object to send the file with the other form data
    const formData = new FormData();
    formData.append('expertiseDomain', this.expertiseDomain);
    formData.append('experience', this.experience);
    formData.append('rates', this.rates);
    formData.append('documents', this.selectedFile); // Append the file to FormData
    formData.append('email', this.userEmail);

    console.log('Expert data being sent:', formData);

    // Send the formData to the backend via AuthService
    this.authService.becomeExpert(formData).subscribe(
      (response) => {
        console.log('User became expert:', response);
        alert('Vous êtes maintenant un expert !');
        this.router.navigate(['/dashboard']); // Redirect to dashboard or expert dashboard
      },
      (error) => {
        console.error('Error:', error);
        alert('Échec de la mise à jour pour devenir expert.');
      }
    );
  }

}
