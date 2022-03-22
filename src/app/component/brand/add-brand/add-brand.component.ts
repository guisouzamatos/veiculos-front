import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BrandService} from "../brand.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: BrandService, private router: Router) {
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      name: [null, Validators.required]
    });

  }

  onSubmit() {
    if (this.formulario.value.name != null) {
      this.service.post(this.formulario.value).subscribe();
      this.router.navigate(['/marca']);
    }
  }
}
