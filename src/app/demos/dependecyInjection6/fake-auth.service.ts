import { Injectable } from '@angular/core';

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root'
})
export class FakeAuthService {


  
  public isConnect : boolean = false

  constructor() {

    let tmpConnectState = localStorage.getItem('isConnect')
    if(tmpConnectState)
      this.isConnect = Boolean(tmpConnectState)

  }

  
  login(){
    this.isConnect = true
    localStorage.setItem('isConnect', JSON.stringify(this.isConnect))
  }

  logout(){
    localStorage.removeItem('isConnect')
    return this.isConnect = false
  }
}
