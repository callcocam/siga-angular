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
import { PagerService } from '../services/pager.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { PaginationModule } from 'ngx-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { SearchComponent } from '../componet/search/search.component';
import { SelectComponent } from '../componet/select/select.component';
@NgModule({
  declarations: [CitysComponent, RadioComponent, PagerComponent, SearchComponent,
    SelectComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule,NgxPaginationModule,PaginationModule.forRoot()],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CitysComponent,
    RadioComponent,
    PagerComponent,
    NgxPaginationModule,
    PaginationModule,
    SearchComponent,
    SelectComponent
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
        PagerService
      ]
    };
  }
}
