import {Routes} from '@angular/router';

import {
  DashboardComponent,
  CountryComponent,
  IndexComponent
} from './component/master';

export const routes: Routes = [
    {path: '', component: IndexComponent, pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'countries', component: CountryComponent},
];
