import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  messageList: string[];
  isMessageShow: boolean;
  constructor() {
    this.messageList = [];
  }
  logMessage(message: string) {
    this.messageList.push(message);
  }
}
