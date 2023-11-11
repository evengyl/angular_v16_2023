import { Component } from '@angular/core';
import { FakeAuthService } from './fake-auth.service';

@Component({
  selector: 'app-services6',
  templateUrl: './services6.component.html',
  styleUrls: ['./services6.component.css']
})
export class DependencyInjection6Component {

  public isConnectWS : boolean = false
  public isConnect : boolean = false


  constructor(private authServe : FakeAuthService)
  {
    this.isConnect = this.authServe.isConnect

    console.log("Sans service : ", this.isConnectWS);
    console.log("Avec service : ", this.isConnect);
  }

  loginWS(){
    this.isConnectWS = true
  }

  logoutWS(){
    this.isConnectWS = false
  }


  login(){
    this.authServe.login()
    this.isConnect = this.authServe.isConnect
  }

  logout(){
    this.isConnect = this.authServe.logout()
  }

}
