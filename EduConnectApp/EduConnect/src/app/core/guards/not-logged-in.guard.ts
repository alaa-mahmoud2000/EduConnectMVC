import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const notLoggedInGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  const isLoggedIn = userService.getUserData() !== null; // Check if user is logged in

  if (isLoggedIn) {
    return router.createUrlTree(['/']); // Redirect to home if logged in
  }

  return true;
};
