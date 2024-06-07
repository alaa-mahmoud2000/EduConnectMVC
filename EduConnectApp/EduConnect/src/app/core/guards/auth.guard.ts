import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService); // Inject UserService
  const router = inject(Router); // Inject Router

  const isLoggedIn = userService.getUserData() !== null; // Check login status

  if (!isLoggedIn) {
    return router.createUrlTree(['/login']); // Redirect to login if not logged in
  }

  return true; // Allow access if logged in
};
