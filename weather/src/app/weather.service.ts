import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  urlcity : any;
  urlapi: any;
  city:any;

  constructor(private _http: HttpClient) {
    this.urlcity = 'http://api.openweathermap.org/data/2.5/weather?q=';
    this.urlapi = '&apikey=16099880799b9d34c762888f7f4d07d8';
   }
   getweather(city){
     console.log('city weather');
     return this._http.get( 
       this.urlcity+city+this.urlapi
     )
   }
}
