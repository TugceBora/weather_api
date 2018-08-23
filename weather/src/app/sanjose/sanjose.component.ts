import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service'

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weather:any;

  constructor(private _weatherService: WeatherService) { 
    

  }

  ngOnInit() {

    const tempObservable = this._weatherService.getweather('sanjose');
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
