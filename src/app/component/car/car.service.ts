import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {apiUrl} from "../../utils/apiUrl";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  public getAll(){
    return this.http.get<any>(apiUrl.url.concat("/car/get-all"));
  }

  public getById(id:Number){
    return this.http.get<any>(apiUrl.url.concat(`/car/get-by-id/${id}`));
  }

  public post(car:any){
    return this.http.post<any>(apiUrl.url.concat("/car/post"),JSON.stringify(car));
  }

  public delete(id:Number){
    return this.http.delete(apiUrl.url.concat(`/car/delete/${id}`));
  }
}
