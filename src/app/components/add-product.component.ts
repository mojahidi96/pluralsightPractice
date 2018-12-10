import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styles: []
})
export class AddProductComponent implements OnInit {
  currentProduct: any;
  originalProduct: any;
  constructor() {}

  ngOnInit() {}

  get product() {
    return this.currentProduct;
  }
  set product(value) {
    this.currentProduct = value;
    // Clone the object to retain a copy
    this.originalProduct = Object.assign({}, value);
  }

  get isDirty(): boolean {
    return (
      JSON.stringify(this.originalProduct) !==
      JSON.stringify(this.currentProduct)
    );
  }
}
