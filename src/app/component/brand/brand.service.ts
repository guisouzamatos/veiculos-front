import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {apiUrl} from "../../utils/apiUrl";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) {
  }

  public getAll() {
    return this.http.get<any>(apiUrl.url.concat("/brand/get-all"));
  }

  public getById(id: Number) {
    return this.http.get<any>(apiUrl.url.concat(`/brand/get-by-id/${id}`));
  }

  public post(brand: any) {
    return this.http.post(apiUrl.url.concat("/brand/post"), brand);
  }

  public delete(id: Number) {
    return this.http.delete(apiUrl.url.concat(`/brand/delete/${id}`));
  }
}
