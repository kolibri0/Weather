import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forecast } from '../models/forecast';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  key: string = 'ba3865f623704ba2b96113211222208'

  constructor(
    private http: HttpClient
  ) { }


  oneDay(city: string):Observable<any>{
    return this.http.get<Weather>(`http://api.weatherapi.com/v1/current.json?key=${this.key}&q=${city}&aqi=no`)
  }

  sevenDay(city: string): Observable<any>{
    return this.http.get<Forecast & Weather>(`http://api.weatherapi.com/v1/forecast.json?key=${this.key}&q=${city}&days=7&aqi=no&alerts=no`)
  }
}
