import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';


import {HomeComponent} from './pages/home/home.component';
import {DetailsComponent} from './pages/details/details.component';
import {WeatherService} from './services/weather/weather.service';
import {HttpClientModule} from '@angular/common/http';
import {WeatherCardComponent} from './ui/weather-card/weather-card.component';
import {AddCardComponent} from './ui/add-card/add-card.component';
import {AddComponent} from './pages/add/add.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import {UiService} from './services/ui/ui.service';
import { GooglePlacesDirective } from './google-places.directive';
import { SearchDataPipe } from './search-data.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AutocompleteLibModule} from 'angular-ng-autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    WeatherCardComponent,
    AddCardComponent,
    AddComponent,
    LoginComponent,
    SignupComponent,
    AddCardComponent,
    GooglePlacesDirective,
    SearchDataPipe
  ],
  imports: [
    BrowserModule,
    GooglePlaceModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AutocompleteLibModule
  ],
  providers: [
    WeatherService,
    UiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
