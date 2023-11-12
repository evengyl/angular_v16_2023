import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardFakeService {

  public statusAuth : boolean = false

  constructor()
  {}

  logIn()
  {
    this.statusAuth = true
  }

  logOut()
  {
    this.statusAuth = false
  }
}
