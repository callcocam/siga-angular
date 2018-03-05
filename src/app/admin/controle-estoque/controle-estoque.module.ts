import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ControleEstoqueRoutingModule } from './controle-estoque-routing.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductsComponent],
  exports: [
    ProductsComponent
  ]
})
export class ControleEstoqueModule { }
