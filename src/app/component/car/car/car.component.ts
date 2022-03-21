import {Component, OnInit} from '@angular/core';
import {CarService} from "../car.service";
import {BrandService} from "../../brand/brand.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  public list: Array<any> = [];

  constructor(private service: CarService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll() {
    this.service.getAll().subscribe(it =>{
      this.list = [];
      this.list = it;
    });
  }

  public getById(id:Number){
    this.service.getById(id).subscribe(it =>{
      return it;
    })
  }

  public delete(id:Number){
    this.service.delete(id).subscribe();
  }

  public post(car:any){
    this.post(car);
  }



}
