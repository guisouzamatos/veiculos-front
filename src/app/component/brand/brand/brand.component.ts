import {Component, OnInit} from '@angular/core';
import {BrandService} from "../brand.service";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  public list: Array<any> = [];

  constructor(private service: BrandService) {
  }

  ngOnInit(): void {
    this.list = [];
    this.getAll();

  }

  public getAll() {
    this.service.getAll().subscribe(it => {
      this.list = it;
    });
  }

  public getById(id: Number) {
    this.service.getById(id).subscribe(it => {
      return it;
    })
  }

  public delete(id: Number) {
    this.service.delete(id).subscribe();
  }
}
