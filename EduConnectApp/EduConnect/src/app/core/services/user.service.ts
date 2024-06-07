import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData: any = null; // Store user data in memory

  constructor() {
    // Load data from localStorage on service initialization (if available)
    this.loadUserData();
  }

  setUserData(data: any) {
    this.userData = data;
    localStorage.setItem('userData', JSON.stringify(data)); // Save to localStorage
  }

  getUserData(): any {
    return this.userData;
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
