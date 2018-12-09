import { Component, OnInit } from "@angular/core";
import { LoginService } from "../shared/login.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: []
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}
  submit(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.loginService.Login(userName, password);
      if (this.loginService.navigateUrl) {
        this.router.navigateByUrl(this.loginService.navigateUrl);
      } else {
        this.router.navigate(["product"]);
      }
    } else {
      console.log("please enter username and password");
      return;
    }
  }
}
