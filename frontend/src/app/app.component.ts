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

  weather;
  url = "http://openweathermap.org/img/wn/";
  url2 = "@2x.png";
constructor(private weatherService: WeatherService){

}
//imprimiendo en consola listo para un placeholder
  ngOnInit(){
   
  }

  getWeatherCity(cityName: string){
    this.weatherService.getWeather(cityName)
    .subscribe(
      //res => console.log(res),
      res => {
        this.weather = res;
        console.log(res)
      },
      err => console.log(err)
    )
  }

  onSubmit(cityName: HTMLInputElement){
    if (cityName.value){
      //console.log(cityName.value);
      this.getWeatherCity(cityName.value);
      cityName.value = '';
    } else{
        alert('Ingrese un dato válido');
    }
        cityName.focus();
        return false;
  }
 
}
