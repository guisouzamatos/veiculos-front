import {Component, OnInit} from '@angular/core';
import {CarService} from "../car.service";
import {BrandService} from "../../brand/brand.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  public getAll: Array<any> = [];

  constructor(private service: CarService, private brandService: BrandService) {
  }

  ngOnInit(): void {
    this.listaCarros();
  }


  public listaCarros() {
    this.service.buscarTodos().subscribe(it =>{
      this.getAll = it;
    });
  }
}
