import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarComponent} from "./component/car/car/car.component";
import {BrandComponent} from "./component/brand/brand/brand.component";
import {AddcarComponent} from "./component/car/add-car/addcar.component";
import {AddBrandComponent} from "./component/brand/add-brand/add-brand.component";

const routes: Routes = [
  { path: '', component: CarComponent },
  { path: 'carro/add', component: AddcarComponent },
  { path: 'marca', component: BrandComponent },
  { path: 'marca/add', component: AddBrandComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
