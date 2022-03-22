import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrandComponent} from './component/brand/brand/brand.component';
import {CarComponent} from './component/car/car/car.component';
import {AddcarComponent} from "./component/car/add-car/addcar.component";
import {AddBrandComponent} from './component/brand/add-brand/add-brand.component';
import {HttpClientModule} from "@angular/common/http";
import {CarService} from "./component/car/car.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CarComponent,
    AddcarComponent,
    AddBrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule

  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
