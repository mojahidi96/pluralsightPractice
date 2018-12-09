import { Component, OnInit } from "@angular/core";
import { MessageService } from "./message.service";

@Component({
  selector: "app-message",
  template: `
    <div class="row">
      <h4 class="col-md-10">Message Log</h4>
      <span class="col-md-2">
        <a class="btn btn-default" (click)="close()"> x </a>
      </span>
    </div>
    <div *ngFor="let message of messageService.messageList">
      <div class="message-row">{{ message }}</div>
    </div>
  `,
  styles: []
})
export class MessageComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit() {}
  close() {}
}
