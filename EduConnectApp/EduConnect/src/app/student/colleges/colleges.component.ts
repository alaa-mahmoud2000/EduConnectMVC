import { Component } from '@angular/core';
import { EduApiService } from '../../core/services/edu-api.service';
import { ICollege } from '../../shared/interfaces';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrl: './colleges.component.css'
})
export class CollegesComponent {
  colleges : ICollege[] = [];
  IsLoggedIn : boolean = false;
  userProfile : any;

  constructor(private apiService : EduApiService , private toastr : ToastrService, private userService : UserService , private router: Router){
  }
  
  ngOnInit(){
    this.IsLoggedIn = this.userService.isUserLoggedIn();
    this.userProfile = this.userService.getUserData();
    this.apiService.getColleges().subscribe({
      next: (response) => {
        this.colleges = response;
      },
      error: (error) => {
        this.toastr.error('Error loading data , try again later.');
      }
    });
  }
  LogoutUser() {
    this.userService.clearUserData();
    return this.router.navigate(['login']);  
  }
}
