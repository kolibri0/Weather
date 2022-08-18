import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }


  oneDay(city: string):Observable<any>{
    return this.http.get(`http://api.weatherapi.com/v1/current.json?key=4bb8925c402649dda83191918220608&q=${city}&aqi=no`)
  }

}
