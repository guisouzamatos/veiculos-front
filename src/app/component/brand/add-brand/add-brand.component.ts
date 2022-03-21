import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BrandService} from "../brand.service";

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, private service:BrandService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      name: [null]
    });

  }

  onSubmit(){
    if (this.formulario.value.name != null){
      this.service.post(this.formulario.value).subscribe();
    }
  }
}
