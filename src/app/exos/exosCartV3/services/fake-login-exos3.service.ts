import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeLoginExos3Service {

  isConnect : boolean = undefined

  constructor() {
    this.isConnect = false
  }

  
  login()
  {
    this.isConnect = true
  }

  logout()
  {
    this.isConnect = false
  }
}
