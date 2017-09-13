import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import { HideElDirective, UnderlineDirective } from './directive/master';
import { ReverseStrPipe } from './pipes/reverse-str.pipe';
import { AddStringPipe } from './pipes/add-string.pipe';


@NgModule({
  declarations: [
  DashboardComponent,
  LoginComponent,
  HideElDirective,
  UnderlineDirective,
  ReverseStrPipe,
  AddStringPipe
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
