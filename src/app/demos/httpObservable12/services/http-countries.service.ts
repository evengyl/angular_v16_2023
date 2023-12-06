import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCountriesService {

  private baseUrl : string = "https://restcountries.com/v3.1"

  constructor(private _client : HttpClient) { }


  getAllcountries() : Observable<any[]>
  {
    return this._client.get<any[]>(this.baseUrl + "/all")
  }

  getOneByName(name : string) : Observable<any[]>
  {
    return this._client.get<any[]>(this.baseUrl + "/name/" + name)
  }
}
