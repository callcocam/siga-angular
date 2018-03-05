import { Component, OnInit, Input } from "@angular/core";
import { PagerService } from '../../services/pager.service';

@Component({
  selector: "app-pager-component",
  templateUrl: "./pager.component.html",
  styleUrls: ["./pager.component.css"]
})
export class PagerComponent implements OnInit {
  // array of all items to be paged
  @Input() allItems: any;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  constructor(private pagerService: PagerService) {}

  ngOnInit() {
    this.setPage(1);
    console.log(this.allItems)
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems, page);

    // get current page of items
    // this.pagedItems = this.allItems.slice(
    //   this.pager.startIndex,
    //   this.pager.endIndex + 1
    // );
  }
}
