import { Component, OnInit } from "@angular/core";
import { from } from "rxjs";
@Component({
  selector: "app-product-list",
  templateUrl: "productList.component.html"
})
export class ProductListComponent implements OnInit {
  pageTitle: String = "Product list";
  imageWidth: Number = 50;
  imageHeight: Number = 50;
  isShowImage: Boolean = false;
  // filterText: String;
  _filterText: string;

  filterProducts: any;
  products: any = [
    {
      productId: 1,
      productName: "Leaf Rake",
      productCode: "GDN-0011",
      releaseDate: "March 19, 2016",
      description: "Leaf rake with 48-inch wooden handle.",
      price: 19.95,
      starRating: 3.2,
      imageUrl:
        "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      productId: 2,
      productName: "Garden Cart",
      productCode: "GDN-0023",
      releaseDate: "March 18, 2016",
      description: "15 gallon capacity rolling garden cart",
      price: 32.99,
      starRating: 4.2,
      imageUrl:
        "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    }
  ];
  ratingMessage: string;
  toggleImage() {
    this.isShowImage = !this.isShowImage;
  }
  ngOnInit() {
    this.filterProducts = this.products;
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
