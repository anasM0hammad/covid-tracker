import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;

@Injectable({
  providedIn: 'root'
})
export class CovidService {

 baseUrl = 'https://api.covidindiatracker.com/' ;

  constructor(private http: HttpClient) { }

  getTotalData(){
  	return this.http.get<any>(`${this.baseUrl}total.json`) ;
  }

  getStateData(){
  	return this.http.get<any>(`${this.baseUrl}state_data.json`) ;
  }
}
