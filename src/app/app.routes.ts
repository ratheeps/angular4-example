import {Routes} from '@angular/router';

import {
  DashboardComponent,
  CountryComponent,
  LoginComponent
} from './component/master';

export const routes: Routes = [
    {path: '', component: DashboardComponent, pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'countries', component: CountryComponent},
];
