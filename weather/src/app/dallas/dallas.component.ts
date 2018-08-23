import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service'

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather:any;

  constructor(private _weatherService: WeatherService) { 
    

  }

  ngOnInit() {

    const tempObservable = this._weatherService.getweather('dallas');
    tempObservable.subscribe(
      (weather) =>{
        console.log ('success:',weather)
        this.weather = weather; 
      }, (err)=>{
        console.log ('error',err)
      
      }
    );
  }

}
