import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { async } from 'q';

@Injectable({
  providedIn: 'root'
})

export class GetCityNameService {
cityName: any;
allCity: object;
  constructor(private http: HttpClient) { }
  baseURL = 'http://localhost:3000/cities';

  putCityName(city: string){
    this.cityName = {"name":city}
    console.log(this.cityName);
    this.http.post(this.baseURL,this.cityName).subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      },
      error  => {
      
      console.log("Error", error);
      
      }
      
      );

  }
  getCityName(){
this.http.get(this.baseURL).subscribe(data => {
   this.cityName = data;
  // console.log(this.cityName);
})
    return this.cityName.name;
  }

  getAllCity(){
     this.http.get(this.baseURL).subscribe(data => {
      this.allCity = data;
     console.log(this.allCity);
     return this.allCity;
   })
  //  console.log(this.allCity);
  //      return this.allCity;
      
  }
}
