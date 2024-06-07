import { Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { HomeComponent } from './shared/home/home.component';
import { SignupComponent } from './shared/signup/signup.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { CollegesComponent } from './student/colleges/colleges.component';
import { authGuard } from './core/guards/auth.guard';
import { notLoggedInGuard } from './core/guards/not-logged-in.guard';

export const routes: Routes = [
    {path: "" , component: HomeComponent},
    {path : "login", component : LoginComponent , canActivate: [notLoggedInGuard]},
    {path: "signup" , component: SignupComponent , canActivate: [notLoggedInGuard]},
    {path: "contactus" , component: ContactUsComponent},
    {path: "aboutus" , component: AboutUsComponent},
    {path: "colleges", component: CollegesComponent , canActivate: [authGuard]}
];
