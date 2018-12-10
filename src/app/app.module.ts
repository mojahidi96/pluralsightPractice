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
import { AddProductComponent } from "./components/add-product.component";
import { ProductAddInfoComponent } from "./components/product.add.info.component";
import { ProductTagComponent } from "./components/product.add.tag.component";
import { ProductdetailsService } from "./productdetails.service";
import { LoginComponent } from "./components/login.component";
import { AuthGuard } from "./shared/auth.guard";
import { MessageModule } from "./message/message.module";
import { ProducteditGuard } from "./shared/productedit.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ToSpace,
    StarComponent,
    PageNotFoundComponent,
    AddProductComponent,
    ProductAddInfoComponent,
    ProductTagComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MessageModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      {
        path: "product",
        canActivate: [AuthGuard],
        component: ProductListComponent
      },
      {
        path: "product/:id",
        canActivate: [ProductDetailsGuard],
        resolve: { product: ProductdetailsService },
        component: ProductDetailsComponent
      },
      {
        path: "product/:id/add",
        component: AddProductComponent,
        canDeactivate: [ProducteditGuard],
        resolve: { product: ProductdetailsService },
        children: [
          { path: "", pathMatch: "full", redirectTo: "info" },
          { path: "info", component: ProductAddInfoComponent },
          { path: "tag", component: ProductTagComponent }
        ]
      },
      { path: "login", component: LoginComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "**", component: PageNotFoundComponent }
    ]),
    HttpClientModule
  ],
  providers: [ProductdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
