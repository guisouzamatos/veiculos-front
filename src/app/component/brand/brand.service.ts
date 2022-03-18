import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {apiUrl} from "../../utils/apiUrl";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }

  public buscarTodos(){
    return this.http.get<any>(apiUrl.url.concat("/car/get-all"));
  }

  public buscarPorId(id:Number){
    return this.http.get<any>(apiUrl.url.concat("/brand/get-by-id/{id}"));
  }
}
