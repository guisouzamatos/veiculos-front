import {Component, OnInit} from '@angular/core';
import {CarService} from "../car.service";
import {BrandService} from "../../brand/brand.service";

@Component({
  selector: 'app-car', templateUrl: './car.component.html', styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  public list: Array<any> = [];

  constructor(private service: CarService, private brandService: BrandService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll() {
    this.service.getAll().subscribe(res => {
      res.forEach((it: any) => {
        this.brandService.getById(it.brandId).subscribe(res => {
          it.brandId = res.name;
        })
      });
      this.list = [];
      this.list = res;
    });
  }

  public getById(id: Number) {
    this.service.getById(id).subscribe(res => {
      return res;
    })
  }

  public delete(id: Number) {
    this.service.delete(id).subscribe(res=>{
      console.log(id);
    });
  }

  public post(car: any) {
    this.service.post(car);
  }


}
