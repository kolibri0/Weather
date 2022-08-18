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

  search(){
    if(!this.city)return
    this.weatherService.oneDay(this.city).subscribe((res)=>{
      this.weather = res
      console.log(this.weather)
    },error => {
      alert(`${error.statusText}, please enter the city correctly`)
    })
  }

}
