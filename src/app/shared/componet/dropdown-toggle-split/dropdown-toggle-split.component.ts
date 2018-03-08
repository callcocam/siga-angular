import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-dropdown-toggle-split",
  templateUrl: "./dropdown-toggle-split.component.html",
  styleUrls: ["./dropdown-toggle-split.component.css"]
})
export class DropdownToggleSplitComponent implements OnInit {
  @Input() label: string = "Selecione";
  @Input() classBtn: string = "btn-sm btn-success";
  @Input() items: any[];

  @Output() Selected = new EventEmitter<any>();
  itemSelected = 0;
  constructor() {}

  ngOnInit() {}
  emitSelected(item) {
    this.label = item.label;
    this.itemSelected = item.value;
    this.Selected.emit(item);
  }
}
