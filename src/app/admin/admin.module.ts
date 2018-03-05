import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AuthComponent } from './layout/auth/auth.component';
import { MainHeaderComponent } from './layout/admin/main-header/main-header.component';
import { MainSidebarLeftComponent } from './layout/admin/main-sidebar-left/main-sidebar-left.component';
import { MainFooterComponent } from './layout/admin/main-footer/main-footer.component';
import { MainSidebarRightComponent } from './layout/admin/main-sidebar-right/main-sidebar-right.component';
import { MainDashboardComponent } from './layout/admin/main-dashboard/main-dashboard.component';
import { AdminComponent } from './layout/admin/admin.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    MainHeaderComponent,
    MainSidebarLeftComponent,
    MainFooterComponent,
    MainSidebarRightComponent,
    MainDashboardComponent
  ],
  exports: [
    AdminComponent,
    MainHeaderComponent,
    MainSidebarLeftComponent,
    MainFooterComponent,
    MainSidebarRightComponent,
    MainDashboardComponent
  ]
})
export class AdminModule { }
