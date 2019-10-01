import {Component, OnInit} from '@angular/core';
import { GetCityNameService } from 'src/app/get-city-name.service';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private cityNameService: GetCityNameService, private weatherService: WeatherService) {
  }

  cities: {};
  keyword = 'name';
  showCity: boolean = false;
  ngOnInit() {
 this.weatherService.getCityList()
.subscribe(data => {
 this.cities = data;
});
    }

    citySelected(filterVal: any){
       console.log(filterVal);
      this.showCity = true;
      this.cityNameService.putCityName(filterVal.name);

    } 
 
  selectEvent(item) {
    // do something with selected item
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
    this.showCity = false;
  }

}
