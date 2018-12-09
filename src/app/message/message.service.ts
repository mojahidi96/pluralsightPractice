import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  messageList: string[];
  constructor() {}
  logMessage(message: string) {
    this.messageList.push(message);
  }
}
