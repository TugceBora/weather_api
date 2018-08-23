import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service'

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather:any;

  constructor(private _weatherService: WeatherService) { 
    

  }

  ngOnInit() {

    const tempObservable = this._weatherService.getweather('burbank');
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
