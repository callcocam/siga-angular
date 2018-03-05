import { Injectable } from "@angular/core";
import { DefaultRequestOptionsService } from "./services/default-request-options.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ResourcesService {
  public path = "";
  public BASE_URL = "http://localhost:8585/";


  public result = {
      paginator: {
        pageCount: 0,
        itemCountPerPage: 10,
        first: 0,
        current: 1,
        last: 0,
        next: 0,
        pagesInRange: {},
        firstPageInRange: 1,
        lastPageInRange: 0,
        currentItemCount: 0,
        totalItemCount: 0,
        firstItemNumber: 1,
        lastItemNumber: 0
      },
      paramsWrap: {
        column: {},
        itemCountPerPage: 10,
        order: "asc",
        page: 1,
        quickSearch: "",
        rowAction: ""
      },
      itemCountPerPage: 10,
      quickSearch: "",
      name: "Base table",
      itemCountPerPageValues: ['5', '10', '20', '50', '100', '200'],
      showQuickSearch: false,
      showPagination: true,
      showItemPerPage: true,
      showExportToCSV: false,
      sEcho: {}
  };
  constructor(
    private http: HttpClient,
    private defaultReqOpt: DefaultRequestOptionsService
  ) {}

  getItem(id?: any): Observable<any> {
    return this.http.get(
      `${this.BASE_URL}${this.path}/${id}`,
      this.defaultReqOpt.merge()
    );
  }

  getList(params?: any): Observable<any> {
    return this.http.get(
      `${this.BASE_URL}${this.path}`,
      this.defaultReqOpt.merge(params)
    );
  }

  create(data) {}

  update(data, id?: number) {}

  delete(id: number) {}
}
