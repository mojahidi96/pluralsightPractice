import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IProduct } from "../products";

@Component({
  selector: "app-product.add.info",
  templateUrl: "./product.add.info.component.html",
  styles: []
})
export class ProductAddInfoComponent implements OnInit {
  product: IProduct;
  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.parent.data.subscribe(arg => {
      console.log(arg);
      this.product = arg["product"];
    });
  }
}
