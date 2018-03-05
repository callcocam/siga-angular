import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
@NgModule({
  imports: [
   
    RouterModule.forChild([
        { }
      ])
    
  ],
  exports: [
    RouterModule
  ]
})
export class ControleEstoqueRoutingModule { }
