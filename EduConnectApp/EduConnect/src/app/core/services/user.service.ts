import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData: any = null; // Store user data in memory

  constructor() {
    this.loadUserData();
  }

  setUserData(data: any) {
    this.userData = data;
    localStorage.setItem('userData', JSON.stringify(data)); // Save to localStorage
  }

  getUserData(): any {
    return this.userData;
  }

  getToken(){
    this.loadUserData();
    console.log(this.userData);
    if(this.userData){ return this.userData.tkn; } else { return null; }
  }

  clearUserData() {
    this.userData = null;
    localStorage.removeItem('userData');
  }

  isUserLoggedIn() : boolean{
    return this.userData ? true : false;
  }

  private loadUserData() {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      this.userData = JSON.parse(storedData);
    }
  }
}
