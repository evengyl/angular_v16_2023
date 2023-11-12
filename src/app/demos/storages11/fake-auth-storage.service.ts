import { Injectable } from '@angular/core';

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root'
})
export class FakeAuthStorageService {


  
  public isConnect : boolean = false

  constructor() {
  }

  
  login(){
    this.isConnect = true
  }

  logout(){
    return this.isConnect = false
  }
}
