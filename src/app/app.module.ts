import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home.component";
import { ProductListComponent } from "./components/productList.component";
import { ToSpace } from "./shared/convert-to-space.pipe";
import { StarComponent } from "./components/star.component";
import { RouterModule, Router } from "@angular/router";
import { PageNotFoundComponent } from "./components/pageNotFound.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductDetailsComponent } from "./components/product.details.component";
import { ProductDetailsGuard } from "src/app/shared/product.details.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ToSpace,
    StarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "product", component: ProductListComponent },
      {
        path: "product/:id",
        canActivate: [ProductDetailsGuard],
        component: ProductDetailsComponent
      },
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "**", component: PageNotFoundComponent }
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
