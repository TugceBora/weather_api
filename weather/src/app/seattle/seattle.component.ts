import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service'

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather:any;

  constructor(private _weatherService: WeatherService) { 
    

  }

  ngOnInit() {

    const tempObservable = this._weatherService.getweather('seattle');
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
