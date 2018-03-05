import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { AuthComponent } from "./auth.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoveComponent } from "./recove/recove.component";
import { AuthGuestRouterService } from "../../../shared/services/auth-guest-router.service";
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "admin",
        component: AuthComponent,
        children: [
          {
            path: 'auth',
            redirectTo: "auth/login",
            pathMatch: 'full',
            canActivate: [AuthGuestRouterService]           
          },
          {
            path: 'auth/login',
            component: LoginComponent,
            canActivate: []
          },
          {
            path: 'auth/register',
            component: RegisterComponent,
            canActivate: [AuthGuestRouterService]
          },
          {
            path: 'auth/recover',
            component: RecoveComponent,
            canActivate: [AuthGuestRouterService]
          }
        ]
      }
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
