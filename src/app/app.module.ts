import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import { HideElDirective, UnderlineDirective } from './directive/master';
import { ReverseStrPipe } from './pipes/reverse-str.pipe';
import { AddStringPipe } from './pipes/add-string.pipe';
import { CountryService, AuthService, UserService } from './services/master';
import {HttpModule} from '@angular/http';
import {
  LoginComponent,
  IndexComponent,
  CountryComponent,
  DashboardComponent
} from './component/master';

@NgModule({
  declarations: [
  DashboardComponent,
  LoginComponent,
  HideElDirective,
  UnderlineDirective,
  ReverseStrPipe,
  AddStringPipe,
  CountryComponent,
  IndexComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    CountryService,
    AuthService,
    UserService
  ],
  bootstrap: [IndexComponent]
})
export class AppModule { }
