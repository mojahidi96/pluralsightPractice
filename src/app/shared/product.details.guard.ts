import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";

@Injectable({ providedIn: "root" })
export class ProductDetailsGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(next, state);
    const id = +next.url[1].path;
    if (isNaN(id) || id < 0) {
      alert("Invalid id");
      this.router.navigate(["product"]);
      return false;
    } else {
      return true;
    }
  }
}
