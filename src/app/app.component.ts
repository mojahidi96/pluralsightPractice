import { Component, OnInit } from "@angular/core";
import { LoginService } from "./shared/login.service";
import {
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  Router
} from "@angular/router";
import { ProductService } from "./shared/product.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  pageTitle: String = "Acme Product Management";
  loading = false;
  logOut() {
    this.loginService.LogOut();
  }
  constructor(
    private loginService: LoginService,
    private router: Router,
    private productServic: ProductService
  ) {
    this.router.events.subscribe(navigateEvent =>
      this.checkNavigation(navigateEvent)
    );
  }
  checkNavigation(navigateEvent: Event) {
    if (navigateEvent instanceof NavigationStart) {
      this.loading = true;
    }
    if (
      navigateEvent instanceof NavigationEnd ||
      navigateEvent instanceof NavigationCancel ||
      navigateEvent instanceof NavigationError
    ) {
      this.loading = false;
    }
  }
}
