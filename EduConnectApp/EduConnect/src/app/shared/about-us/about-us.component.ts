import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  IsLoggedIn : boolean = false;
  userProfile : any;
  constructor(private userService : UserService){

  }
  ngOnInit(){
    this.IsLoggedIn = this.userService.isUserLoggedIn();
    this.userProfile = this.userService.getUserData();
  }

}
