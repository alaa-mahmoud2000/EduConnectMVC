import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  IsLoggedIn : boolean = false;
  userProfile : any;
  constructor(private userService : UserService){

  }
  ngOnInit(){
    this.IsLoggedIn = this.userService.isUserLoggedIn();
    this.userProfile = this.userService.getUserData();
  }
}
