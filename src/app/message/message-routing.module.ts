import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MessageComponent } from "./message.component";

const routes: Routes = [
  { path: "message", component: MessageComponent, outlet: "message" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule {}
