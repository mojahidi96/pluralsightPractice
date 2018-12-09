import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  templateUrl: "product.details.component.html"
})
export class ProductDetailsComponent implements OnInit {
  pageTitle = "hel";
  product: any;
  ngOnInit(): void {
    this.pageTitle = "hello"; //+`Id of product ${this.route.snapshot.paramMap.get("id")}`;
    this.product = this.route.snapshot.data["product"];
  }
  back() {
    this.router.navigate(["product"]);
  }
  constructor(private route: ActivatedRoute, private router: Router) {}
}
