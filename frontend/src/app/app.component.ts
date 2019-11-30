import { Component, OnInit } from '@angular/core';
//Importando el servicio
import { WeatherService } from './services/weather.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class AppComponent {
//   title = 'weather-cannvest';
// }

export class AppComponent implements OnInit {
  //Clima - weather
  weather;
  urlimg = "http://openweathermap.org/img/wn/";
  url2 = ".png";
  //Pronóstico - Forecast
  forecast;
  

constructor(private weatherService: WeatherService){

}
  ngOnInit(){
    
  }
  //Llamando el servicio de clima
  getWeatherCity(cityName: string){
    this.weatherService.getWeather(cityName)
    .subscribe(
      res => {
        this.weather = res;
        console.log(res)
      },
      err => console.log(err)
    )
  }
 
  getForecastCity(cityName: string){
    this.weatherService.getForecast(cityName)
    .subscribe(res => {
        this.forecast = res;
        console.log(res)
      },
      err => console.log(err)
    
    )
  }

  onSubmit(cityName: HTMLInputElement){
    if (cityName.value){
      console.log(cityName.value);
      this.getWeatherCity(cityName.value);
      this.getForecastCity(cityName.value)
      cityName.value = '';
    } else{
        alert('Ingrese un dato válido');
    }
        cityName.focus();
        return false;
  }
 
}
