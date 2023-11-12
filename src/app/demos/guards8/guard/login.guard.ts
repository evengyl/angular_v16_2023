import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { LoginGuardFakeService } from '../login-guard-fake.service';

export const loginGuard: CanActivateFn = (route, state) => {

  let fakeAuthServe = inject(LoginGuardFakeService)

  if(fakeAuthServe.statusAuth)
    return true
  else
    return false
};
