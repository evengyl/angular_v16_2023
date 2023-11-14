import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { CountryServeService } from './country-serve.service';


@Injectable({
  providedIn: 'root'
})
export class CountryResolver implements Resolve<any>{

  constructor(public serve :  CountryServeService) { }


  resolve(route : ActivatedRouteSnapshot)
  {
    return this.serve.getAllcountries()
  }
}