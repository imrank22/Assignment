import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CountryService {
baseUrl: string='https://restcountries.eu/rest/v2'

  /* Subject to share data between components */
  country = new Subject<any>()
  constructor( private http: HttpClient ) { }

  /* Returns list of countries */
  fetchCountryList():Observable<any>{
    return this.http.get(`${this.baseUrl}/all`)
  }

  /* Returns detail of selected country */
  fetchCountryDetails(code):Observable<any>{
    return this.http.get(`${this.baseUrl}/alpha/${code}`)
  }

}
