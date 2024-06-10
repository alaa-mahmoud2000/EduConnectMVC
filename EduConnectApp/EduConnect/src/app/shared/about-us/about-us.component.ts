import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  IsLoggedIn : boolean = false;
  userProfile : any;
  constructor(private userService : UserService , private router : Router){

  }
  ngOnInit(){
    this.IsLoggedIn = this.userService.isUserLoggedIn();
    this.userProfile = this.userService.getUserData();
  }
  LogoutUser() {
    this.userService.clearUserData();
    return this.router.navigate(['login']);  
  }
}
