import { Component } from '@angular/core';
import { LoginGuardFakeService } from './login-guard-fake.service';

@Component({
  selector: 'app-guards8',
  templateUrl: './guards8.component.html'
})
export class Guards8Component{

  statusAuth : boolean = false

  constructor(private loginService : LoginGuardFakeService) { 
    this.statusAuth = this.loginService.statusAuth
  }
  login()
  {
    this.loginService.logIn()
    this.statusAuth = this.loginService.statusAuth
  }

  logout()
  {
    this.loginService.logOut()
    this.statusAuth = this.loginService.statusAuth
  }


}
