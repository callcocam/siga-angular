import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { AuthGuardRouterService } from './shared/services/auth-guard-router.service';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    imports: [
      RouterModule.forRoot([
        { path: '', redirectTo: 'starter', pathMatch: 'full' },
        { path: 'starter', component: StartComponent },
        { path: '**', component: NotFoundComponent }
      ])
    ],
    declarations: [],
    exports: [ RouterModule]
  })
  export class AppRoutingModule { }