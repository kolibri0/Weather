import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forecast } from '../models/forecast';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }


  oneDay(city: string):Observable<any>{
    return this.http.get<Weather>(`http://api.weatherapi.com/v1/current.json?key=4bb8925c402649dda83191918220608&q=${city}&aqi=no`)
  }

  sevenDay(city: string): Observable<any>{
    return this.http.get<Forecast & Weather>(`http://api.weatherapi.com/v1/forecast.json?key=4bb8925c402649dda83191918220608&q=${city}&days=7&aqi=no&alerts=no`)
  }
}
