import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoveComponent } from './recove/recove.component';
import { InputComponent } from '../../../shared/componet/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    AuthRoutingModule    
  ],
  declarations: [
      AuthComponent,
      LoginComponent,
      RegisterComponent,
      RecoveComponent,
      InputComponent
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
