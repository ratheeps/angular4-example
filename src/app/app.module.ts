import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';



@NgModule({
  declarations: [
  DashboardComponent,
  LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class AppModule { }
