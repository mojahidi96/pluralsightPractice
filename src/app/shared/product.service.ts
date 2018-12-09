import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class ProductService {
  isProductLoaded: boolean = true;
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get(`${environment.apiBaseUrl}/products`);
  }
  getProduct(id: number) {
    return this.http.get(`${environment.apiBaseUrl}/products/${id}`);
  }
}
