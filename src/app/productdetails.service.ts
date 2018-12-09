import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Observable, from } from "rxjs";
import { products, IProduct } from "./products";
import { ProductService } from "./shared/product.service";

@Injectable({
  providedIn: "root"
})
export class ProductdetailsService implements Resolve<IProduct> {
  constructor(private router: Router, private productService: ProductService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const id = +route.params["id"];
    if (isNaN(id)) {
      console.log(`Product id was not a number: ${id}`);
      this.router.navigate(["/products"]);
      return of(null);
    }
    if (id === 0) { return null; }
    return this.productService.getProduct(id).pipe(
      map(product => {
        if (product) {
          return product;
        }
        console.log(`Product was not found: ${id}`);
        this.router.navigate(["/product"]);
        return of(null);
      }),
      catchError(error => {
        console.log(`Retrieval error: ${error}`);
        this.router.navigate(["/product"]);
        return of(null);
      })
    );
  }
}
