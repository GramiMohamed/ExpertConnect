import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BecomeExpertComponent } from './become-expert/become-expert.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DashboardExpertComponent } from './dashboard-expert/dashboard-expert.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        BecomeExpertComponent,
        RegisterComponent,
        DashboardExpertComponent,
        WelcomeComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule,

        HttpClientModule,
        NavbarComponent,
        CommonModule

    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
