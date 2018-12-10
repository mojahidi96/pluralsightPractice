import { Injectable } from "@angular/core";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AddProductComponent } from "src/app/components/add-product.component";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProducteditGuard implements CanDeactivate<AddProductComponent> {
  canDeactivate(
    component: AddProductComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (component.isDirty) {
      return confirm(`Navigate away and lose all changes to?`);
    }
    return true;
  }
}
