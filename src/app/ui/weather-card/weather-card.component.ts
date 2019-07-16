import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {WeatherService} from '../../services/weather/weather.service';
import {UiService} from '../../services/ui/ui.service';
import { GetCityNameService } from 'src/app/get-city-name.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit, OnDestroy {

  condition: string;
  currentTemp: number;
  maxTemp: number;
  minTemp: number;
  darkMode: boolean;
  getCityName: any;

  constructor(public weather: WeatherService,
              public router: Router,
              public ui: UiService,
              private cityNameService: GetCityNameService) {
  }
 
  
  ngOnInit() {
    
    this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
      this.getCityName = this.cityNameService.getCityName();
      console.log(this.getCityName);
    });

    this.weather.getWeatherState(this.getCityName)
      .subscribe((data: string) => {
        this.condition = data;
        console.log(data)
      });

    this.weather.getCurrentTemp(this.getCityName).subscribe((data: number) => {
      this.currentTemp = data;
    });
    this.weather.getMinTemp(this.getCityName).subscribe((data: number) => {
      this.minTemp = data;
    });
    this.weather.getMaxTemp(this.getCityName).subscribe((data: number) => {
      this.maxTemp = data;
    });
  }

  ngOnDestroy() {

  }

  openDetails() {
    this.router.navigateByUrl('/details/'+this.getCityName);
  }

}
