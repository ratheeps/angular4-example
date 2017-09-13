import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import { HideElDirective, UnderlineDirective } from './directive/master';


@NgModule({
  declarations: [
  DashboardComponent,
  LoginComponent,
  HideElDirective,
  UnderlineDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class AppModule { }
