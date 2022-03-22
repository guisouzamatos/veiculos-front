import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CarService} from "../car.service";
import {BrandService} from "../../brand/brand.service";

@Component({
  selector: 'app-add-car', templateUrl: './addcar.component.html', styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {

  formulario!: FormGroup;
  public listaMarcas: any;


  constructor(private formBuilder: FormBuilder, private service: CarService, private router: Router, private brandService: BrandService) {
  }

  ngOnInit(): void {
    this.seletorMarca();
    this.formulario = this.formBuilder.group({
      name: [null, Validators.required],
      model: [null, Validators.required],
      year: [null, Validators.required],
      color: [null, Validators.required],
      category: [null, Validators.required],
      brandId: [null, Validators.required]
    });
  }

  onSubmit() {
    var car: any = this.formulario.value;
    if (this.formulario.value.name != null && this.formulario.value.brandId != null && this.formulario.value.category != null && this.formulario.value.color != null && this.formulario.value.year != null && this.formulario.value.model != null) {
      this.listaMarcas.forEach((it: any) => {
        if (it.name == car.brandId) {
          car.brandId = it.id;
        }
      });
      this.service.post(car).subscribe();
      this.router.navigate(['/']);
    }
  }

  private seletorMarca() {
    this.brandService.getAll().subscribe(res => {
      this.listaMarcas = res;
    });
  }
}
