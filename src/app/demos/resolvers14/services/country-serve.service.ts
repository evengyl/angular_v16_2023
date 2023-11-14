import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryServeService {

  private baseUrl : string = "https://restcountries.com/v3.1"

  constructor(private _client : HttpClient) { }


  getAllcountries() : Observable<any[]>
  {
    return this._client.get<any[]>(this.baseUrl + "/all")
  }

}
