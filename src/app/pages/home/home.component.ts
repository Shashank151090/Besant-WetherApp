import {Component, OnInit} from '@angular/core';
import { GetCityNameService } from 'src/app/get-city-name.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities: void

  constructor(private cityNameService: GetCityNameService) {
  }

  ngOnInit() {
    this.cities = this.cityNameService.getAllCity();
    console.log(this.cities);
  }
}
