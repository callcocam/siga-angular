import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';

import { StartComponent } from './start/start.component';
import { AppRoutingModule } from './app.routes';
import { AdminModule } from './admin/admin.module';
import { ControleEstoqueModule } from './admin/controle-estoque/controle-estoque.module';
import { AuthModule } from './admin/layout/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AdminModule,
    SharedModule.forRoot(),
    AuthModule,   
    ControleEstoqueModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
