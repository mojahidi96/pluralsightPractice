import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  templateUrl: "product.details.component.html"
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = "hel";
  ngOnInit(): void {
    this.pageTitle = "hello"; //+`Id of product ${this.route.snapshot.paramMap.get("id")}`;
    console.log(this.route);
  }
  back() {
    this.router.navigate(["product"]);
  }
  constructor(private route: ActivatedRoute, private router: Router) {}
}
