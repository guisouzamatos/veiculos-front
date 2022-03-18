import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {apiUrl} from "../../utils/apiUrl";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  public buscarTodos(){
    return this.http.get<any>(apiUrl.url.concat("/car/get-all"));
  }
}
