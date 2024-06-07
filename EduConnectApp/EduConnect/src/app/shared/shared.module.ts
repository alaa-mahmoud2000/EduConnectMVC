import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [HomeComponent, AboutUsComponent , ContactUsComponent , SignupComponent , LoginComponent],
  imports: [
    CommonModule, RouterLink , ReactiveFormsModule, ToastrModule
  ],
  providers: [
    importProvidersFrom(
      ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        closeButton: true,
      })
    )],
  exports: [HomeComponent , AboutUsComponent , ContactUsComponent , SignupComponent , LoginComponent]
})
export class SharedModule { }
