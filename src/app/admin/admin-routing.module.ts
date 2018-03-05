
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CitysComponent } from './operactional/citys/citys.component';
import { ProductsComponent } from './controle-estoque/products/products.component';
import { MainDashboardComponent } from './layout/admin/main-dashboard/main-dashboard.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthGuardRouterService } from '../shared/services/auth-guard-router.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
           {
            path: 'dashboard',
            component: MainDashboardComponent,
            canActivate: [AuthGuardRouterService]
          },
          {
            path: 'cidades',
            component: CitysComponent,
            canActivate: [AuthGuardRouterService]
          }, 
          {
            path: 'produtos',
            component: ProductsComponent,
            canActivate: [AuthGuardRouterService]
          },
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
            canActivate: [AuthGuardRouterService]
          }
         
                  
        ],
        canActivate: [AuthGuardRouterService]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
