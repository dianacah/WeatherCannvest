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

constructor(private weatherService: WeatherService){

}
//imprimiendo en consola listo para un placeholdeer
  ngOnInit(){
    this.weatherService.getWeather('london')
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
