import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EduApiService } from '../../core/services/edu-api.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private authService: EduApiService,
    private userService: UserService
  ) {}

  ngOnInit() {
    
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.authService.login(formData).subscribe({
        next: (response) => {
          this.userService.setUserData(response);
          this.toastr.success('Login successful', 'Success');
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.toastr.error('Login failed. ' + error.error , 'Error');
        }
      });
    }
  }
}
