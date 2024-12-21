import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BecomeExpertComponent } from './become-expert/become-expert.component';
import { DashboardExpertComponent } from './dashboard-expert/dashboard-expert.component';
import { ExpertGuard } from './guards/expert.guard';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard]},
  { path: 'become-expert', component: BecomeExpertComponent },
  { path: 'dashboardExpert', component: DashboardExpertComponent , canActivate: [AuthGuard, ExpertGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
