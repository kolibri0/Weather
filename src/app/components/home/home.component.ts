import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  city!: string
  weather!: Weather


  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
  }

  //вызов API прогноза погоды на данный момент
  search(){
    if(!this.city)return
    this.weatherService.oneDay(this.city).subscribe({
      next: (res) => this.weather = res,
      error: (err) => alert(`${err.statusText}, please enter the city correctly`)
    })
  }

}
