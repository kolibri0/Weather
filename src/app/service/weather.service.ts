import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forecast } from '../models/forecast';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  key: string = '3f0815e6eeea4859ac071122220310'

  constructor(
    private http: HttpClient
  ) { }


  oneDay(city: string):Observable<any>{
    return this.http.get<Weather>(`http://api.weatherapi.com/v1/current.json?key=${this.key}&q=${city}&aqi=no`)
  }

  sevenDay(city: string): Observable<Forecast & Weather>{
    return this.http.get<Forecast & Weather>(`http://api.weatherapi.com/v1/forecast.json?key=${this.key}&q=${city}&days=7&aqi=no&alerts=no`)
  }
}
