import { Component, OnDestroy, OnInit } from '@angular/core';
import { FakeLogin17Service } from './services/fake-login17.service';
import { HttpCountriesService } from './services/http-countries.service';

@Component({
  selector: 'app-httpObs12',
  templateUrl: './httpObs12.component.html'
})
export class HttpObs12Component implements OnDestroy{

  isConnect : boolean = false
  simpleOfResponse : number = 0
  simpleFromResponse : string = ""
  simpleIntervalResponse : number = 0

  myString1 : string = ""
  myString2 : string = ""


  
  public listCountries : any[] = []
  public oneCountry : any

  constructor(private loginServ : FakeLogin17Service, private httpC : HttpCountriesService) {
    this.isConnect = this.loginServ.isConnect

    this.loginServ.simpleOf$.subscribe((value) => {
      this.simpleOfResponse = value
    })

    this.loginServ.simpleFrom$.subscribe((value) => {
      console.log(value)
      this.simpleFromResponse = value
    })

    this.loginServ.simpleInterval$.subscribe((value) => {
      this.simpleIntervalResponse = value
    })


    this.loginServ.mySubject$.subscribe((value) => {
      console.log(value)
      this.isConnect = value
    })


    this.loginServ.myVar1$.subscribe((value) => {
      this.myString1 = value
    })

    this.loginServ.myVar2$.subscribe((value) => {
      this.myString2 = value
    })


    this.httpC.getAllcountries().subscribe((value) => {
      console.log(value)
      this.listCountries = value
    })
  }


  ngOnDestroy()
  {
    this.loginServ.mySubject$.unsubscribe()
    this.loginServ.myVar1$.unsubscribe()
    this.loginServ.myVar2$.unsubscribe()
    console.log("destroy")
  }

  login()
  {
    this.loginServ.login()
  }

  logout()
  {
    this.loginServ.logout()
  }

  emitOf(nb : number)
  {
    this.loginServ.reEmitOf(nb)

    this.loginServ.simpleOf$.subscribe((value) => {
      this.simpleOfResponse = value
    })

  }


  emitSub()
  {
    this.loginServ.emitMyString()
  }



  detailsCountry(countryName : string)
  {
    this.httpC.getOneByName(countryName).subscribe((value) => {
      console.log(value)
      this.oneCountry = value[0]
    })
  }


 

}
