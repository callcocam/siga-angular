import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/shared.service';
declare var AdminLTE: any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private sharedService:SharedService) { }

  ngOnInit() {
    this.sharedService.AdminLTE.init()
  }

}
