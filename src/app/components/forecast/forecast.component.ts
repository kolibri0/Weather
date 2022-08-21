import { Component, OnInit } from '@angular/core';
import { Forecast } from 'src/app/models/forecast';
import { Weather } from 'src/app/models/weather';
import { WeatherService } from 'src/app/service/weather.service';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  city!: string
  weather!: Weather & Forecast

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    
  }

  forecast(){
    if(!this.city)return
    this.weatherService.sevenDay(this.city).subscribe({
      next: (res) => this.weather = res,
      error: (err) => alert(`${err.statusText}, please enter the city correctly`)
    })
  }

}
