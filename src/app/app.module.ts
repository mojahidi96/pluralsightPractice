import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "src/app/components/home.component";
import { ProductListComponent } from "src/app/components/productList.component";
import { ToSpace } from "src/app/shared/convert-to-space.pipe";
import { StarComponent } from "src/app/components/star.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ToSpace,
    StarComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
