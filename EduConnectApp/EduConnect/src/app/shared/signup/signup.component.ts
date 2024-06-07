import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EduApiService } from '../../core/services/edu-api.service';
import { IStudent, Student } from '../interfaces';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  ErrorMessage : string = "";
  signupForm  !: FormGroup ;

  constructor( 
    private apiService: EduApiService ,  
    private fb: FormBuilder , 
    private toastr: ToastrService, 
    private router: Router) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.signupForm?.valid) {
      console.log(this.signupForm.value);
      let student : IStudent = new Student();
      const formData = this.signupForm.value;

      student._name = formData.username;
      student._password = formData.password;
      student._email = formData.email;

      this.apiService.registerStudent(student).subscribe({
        next: (message: string) => {
          this.toastr.success("Student Added Successfully");
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.ErrorMessage = 'Registration failed. ' + error.error ;
          this.toastr.error(this.ErrorMessage , "Error");
          
        }
      });
    } else {
      return;
    }
  }
}
