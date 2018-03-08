import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CitysComponent } from "../../admin/operactional/citys/citys.component";
import { SharedService } from "../shared.service";
import { LocalStorageService } from "../services/local-storage.service";
import { JwtTokenService } from "../services/jwt-token.service";
import { DefaultRequestOptionsService } from "../services/default-request-options.service";
import { AuthGuardRouterService } from "../services/auth-guard-router.service";
import { AuthGuestRouterService } from "../services/auth-guest-router.service";
import { ResourcesService } from "../resources.service";
import { AuthService } from "../../admin/layout/auth/auth.service";
import { InputComponent } from "../componet/input/input.component";
import { RadioComponent } from "../componet/radio/radio.component";
import { PagerComponent } from "../componet/pager/pager.component";
import { PagerService } from "../services/pager.service";
import {
  PaginationModule,
  BsDatepickerModule,
  BsDropdownModule,
  ProgressbarModule,
  BsLocaleService
} from "ngx-bootstrap";

import { SearchComponent } from "../componet/search/search.component";
import { SelectComponent } from "../componet/select/select.component";
import { DropdownToggleSplitComponent } from "../componet/dropdown-toggle-split/dropdown-toggle-split.component";
import { Daterangepicker } from "../componet/daterangepicker/daterangepicker.module";
import { ActionsComponent } from "../componet/actions/actions.component";
import { BtnComponent } from "../componet/actions/btn/btn.component";
import { HelperComponent } from "../componet/actions/helper/helper.component";
import { DeleteComponent } from "../componet/actions/delete/delete.component";
import { SortableTableDirective } from "../componet/sortable-column/sortable-table.directive";
import { SortableColumnComponent } from "../componet/sortable-column/sortable-column.component";
import { SortService } from '../componet/sortable-column/sort.service';
@NgModule({
  declarations: [
    CitysComponent,
    RadioComponent,
    PagerComponent,
    SearchComponent,
    SelectComponent,
    DropdownToggleSplitComponent,
    ActionsComponent,
    BtnComponent,
    HelperComponent,
    DeleteComponent,
    SortableTableDirective,
    SortableColumnComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Daterangepicker,
    ProgressbarModule.forRoot(),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CitysComponent,
    RadioComponent,
    PagerComponent,
    BsDropdownModule,
    ProgressbarModule,
    PaginationModule,
    SearchComponent,
    SelectComponent,
    BsDatepickerModule,
    DropdownToggleSplitComponent,
    Daterangepicker,
    ActionsComponent,
    BtnComponent,
    HelperComponent,
    DeleteComponent,
    SortableTableDirective,
    SortableColumnComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        SharedService,
        LocalStorageService,
        JwtTokenService,
        DefaultRequestOptionsService,
        AuthGuardRouterService,
        AuthGuestRouterService,
        ResourcesService,
        AuthService,
        PagerService,
        BsLocaleService,
        SortService
      ]
    };
  }
}
