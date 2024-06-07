import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  IsLoggedIn : boolean = false;
  userProfile : any;
  constructor(private userService : UserService){

  }
  ngOnInit(){
    this.IsLoggedIn = this.userService.isUserLoggedIn();
    this.userProfile = this.userService.getUserData();
    console.log(this.IsLoggedIn);
    console.log(this.userProfile)
  }

}
