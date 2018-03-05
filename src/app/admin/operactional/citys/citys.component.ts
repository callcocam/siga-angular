import { Component, OnInit } from "@angular/core";
import { SharedService } from "../../../shared/shared.service";
import { ResourcesService } from "../../../shared/resources.service";
import { FormBuilder, FormControl, FormGroup, FormControlName } from '@angular/forms';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/from'
@Component({
  selector: "app-citys",
  templateUrl: "./citys.component.html",
  styleUrls: ["./citys.component.css"]
})
export class CitysComponent implements OnInit {
  status: string[];
  public loading: boolean;
 
  private numPages: number = 0;
  public maxSize:number = 10;

  
  searchForm: FormGroup
  searchControl: FormControl
  statusControl: FormControl
  datehControl: FormControl
  startDatehControl: FormControl
  endDatehControl: FormControl


  constructor(
    private sharedService: SharedService,
    private resources: ResourcesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.sharedService.AdminLTE.init();
   
    this.resources.path = "admin/cidades";
    this.getList();
    
    this.searchControl = this.formBuilder.control('')
    this.searchForm = this.formBuilder.group({
        searchControl: this.searchControl,
        statusControl: this.statusControl,
        datehControl: this.datehControl,
        startDatehControl: this.startDatehControl,
        endDatehControl: this.endDatehControl,

    })
    
    this.searchControl.valueChanges
    .debounceTime(500)
    .distinctUntilChanged()
    .subscribe(searchTerm=>{
      this.resources.result.quickSearch = searchTerm
      this.getList()
    })
 
    // this.statusControl.valueChanges
    // .subscribe(statusTerm=>{
    //   console.log(statusTerm)
    //   this.resources.result.paramsWrap.itemCountPerPage = statusTerm
    //   this.getList()
    // })

  }
  onChange(){
    console.log("Aqui")
  }
  getList() {
    this.loading = true;
    this.resources.getList({
      itemCountPerPage: this.resources.result.paramsWrap.itemCountPerPage,
      zfTableOrder: this.resources.result.paramsWrap.order,
      zfTablePage: this.resources.result.paginator.current,
      rowAction: this.resources.result.paramsWrap.rowAction,
      quickSearch: this.resources.result.quickSearch
    }).subscribe(
      data => {
        Object.assign(this.resources.result, data.result)
        this.loading = false;
        
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  
 
  pageChanged(event: any): void {
    this.resources.result.paginator.current = event.page;
    this.getList()
  }
 
   
  
}
