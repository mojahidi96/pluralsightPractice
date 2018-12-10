import { Injectable } from "@angular/core";
import { IUser } from "./iuser";
import { Router } from "@angular/router";
import { MessageService } from "../message/message.service";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  currentUser: IUser;
  navigateUrl: string;
  constructor(private router: Router, private messageService: MessageService) {}
  isUserLoggedIn() {
    return this.currentUser;
  }
  Login(userName: string, password: string) {
    if (!userName || !password) {
      console.log("Please enter username and password");
      return false;
    }
    if (userName.toLowerCase() === "admin") {
      this.messageService.logMessage("Please enter username and password");
      this.currentUser = {
        id: 1,
        userName: userName,
        isAdmin: true
      };
      return true;
    }
    this.currentUser = { id: 2, userName: userName, isAdmin: false };
    return true;
  }
  LogOut() {
    this.currentUser = null;
    this.router.navigate(["login"]);
  }
}
