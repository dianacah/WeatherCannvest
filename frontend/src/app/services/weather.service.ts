import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
//apiKey de la página open weather logueada
  apiKey = '8917b25a69bdbd3b5dd113014865161a';
  URL: string = '';
  URI: string = '';
  
  constructor(private http: HttpClient) { 
    //ajuste unidades metricas e idioma
    this.URL = `http://api.openweathermap.org/data/2.5/weather?APPID=${this.apiKey}&units=metric&lang=es&q=`;
    this.URI = `http://api.openweathermap.org/data/2.5/forecast?APPID=${this.apiKey}&units=metric&lang=es&q=`;
  }
//Función del servicio
 getWeather(cityName: string) {
   return this.http.get(`${this.URL}${cityName}`);
   }


  getForecast(cityName: string) {
    console.log(`${this.URI}${cityName}`)
    return this.http.get(`${this.URI}${cityName}`);
  }


}
