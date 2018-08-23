import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service'

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  weather:any;

  constructor(private _weatherService: WeatherService) { 
    

  }

  ngOnInit() {

    const tempObservable = this._weatherService.getweather('washington');
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
