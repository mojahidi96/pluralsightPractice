import { Component, OnInit } from "@angular/core";
import { from } from "rxjs";
import { ProductService } from "src/app/shared/product.service";
import { products } from "../products";
@Component({
  selector: "app-product-list",
  templateUrl: "productList.component.html"
})
export class ProductListComponent implements OnInit {
  pageTitle: String = "Product list";
  imageWidth: Number = 50;
  imageHeight: Number = 50;
  isShowImage: Boolean = false;
  _filterText: string;
  filterProducts: any;
  products: any = products;
  ratingMessage: string;
  constructor(private productServic: ProductService) {}
  toggleImage() {
    this.isShowImage = !this.isShowImage;
  }
  ngOnInit() {
    this.productServic.isProductLoaded = false;
    this.productServic.getProducts().subscribe(response => {
      this.products = response;
      this.productServic.isProductLoaded = true;
      this.filterProducts = this.products;
    });
  }
  get filterText() {
    return this._filterText;
  }

  set filterText(value: string) {
    this._filterText = value;
    this.filterProducts = this.filterText
      ? this.getFilteredProducts()
      : this.products;
  }
  getFilteredProducts() {
    return (this.filterProducts = this.products.filter(
      item =>
        item.productName
          .toLowerCase()
          .indexOf(this.filterText.toLowerCase()) !== -1
    ));
  }
  getStarRate(message: string) {
    this.ratingMessage = message;
  }
}
