import { Component, Input, OnChanges, Output, EventEmitter } from "@angular/core";


@Component({
  selector: "app-star",
  templateUrl: "star.component.html"
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  @Output() showRating: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;
  ngOnChanges() {
    this.starWidth = (this.rating * 75) / 5;
  }
  getStarRating() {
    this.showRating.emit(`Selected product star rating is ${this.rating}`);
  }
}
