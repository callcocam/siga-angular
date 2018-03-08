import { Component, OnInit } from "@angular/core";
import { SharedService } from "../../../shared/shared.service";
import { ResourcesService } from "../../../shared/resources.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormControlName,
  FormArray
} from "@angular/forms";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/from";

@Component({
  selector: "app-citys",
  templateUrl: "./citys.component.html",
  styleUrls: ["./citys.component.css"]
})
export class CitysComponent implements OnInit {
  public loading: boolean;
  maxSize: number = 5;
  numPages: number = 0;

  public state = [
    { label: "Tudo", value: "" },
    { label: "Ativo", value: "1" },
    { label: "Desativado", value: "2" },
    { label: "Excluido", value: "3" }
  ];

  private searchForm: FormGroup;
  private searchControl: FormControl;
  private statusControl: FormControl;
  private datehControl: FormControl;
  private startDatehControl: FormControl;
  private endDatehControl: FormControl;

  constructor(
    private sharedService: SharedService,
    private resources: ResourcesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.resources.path = "admin/cidades";
    this.resources.getCriteria({sortColumn: 'id', sortDirection: this.resources.paramsWrap.order});
    this.getList();

    this.searchControl = this.formBuilder.control("");
    this.searchForm = this.formBuilder.group({
      searchControl: this.searchControl,
      statusControl: this.statusControl,
      datehControl: this.datehControl,
      startDatehControl: this.startDatehControl,
      endDatehControl: this.endDatehControl
    });

    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(searchTerm => {
        this.resources.paramsWrap.zfTableQuickSearch = searchTerm;
        this.getList();
      });
  }

  emitSelected(item) {
    //this.loading = true;
    this.resources.result.paginator.current = 1;
    this.resources.paramsWrap.status = item.value;
    
    this.getList();
  }

  selectedDate(value: any) {
    this.resources.result.paginator.current = 1;
    this.resources.paramsWrap.start_date = value.start;
    this.resources.paramsWrap.end_date = value.end;
   
    this.getList();
  }
  getList() {
    this.resources
      .getList({
        zfTableItemPerPage: this.resources.paramsWrap.itemCountPerPage,
        zfTableOrder: this.resources.paramsWrap.order,
        zfTableColumn: this.resources.paramsWrap.zfTableColumn,
        zfTablePage: this.resources.result.paginator.current,
        rowAction: this.resources.paramsWrap.rowAction,
        zfTableQuickSearch: this.resources.paramsWrap.zfTableQuickSearch,
        valuesState: this.resources.paramsWrap.status,
        start_date: this.resources.paramsWrap.start_date,
        end_date: this.resources.paramsWrap.end_date
      })
      .subscribe(
        data => {
          Object.assign(this.resources.result, data.result);
          this.sharedService.AdminLTE.init();
          
        },
        error => {
          console.log(error);
          this.resources.result.paginator.current = 1;
        }
      );
  }

  pageChanged(event: any): void {
    this.resources.result.paginator.current = event.page;
    this.getList();
  }
  SelectPerPage(item) {
    this.resources.paramsWrap.itemCountPerPage = item.target.value;
    this.getList();
  }
  updateState(item) {
    console.log(`Estou ${item}`);
  }
  delete() {
    console.log(`Estou ${this.resources.paramsWrap.status}`);
  }

  onSorted($event) {
    this.resources.getCriteria($event);    
    this.getList();
  }

  onChange(email: string, isChecked: boolean) {
    if (isChecked) {
      console.log(`Estou checado ${isChecked}`);
    } else {
      console.log(`Não Estou checado ${isChecked}`);
    }
  }
}
