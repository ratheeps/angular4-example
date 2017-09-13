import {Routes} from '@angular/router';

import {
  DashboardComponent,
  CountryComponent,
} from './component/master';

export const routes: Routes = [
    {path: '', component: DashboardComponent, pathMatch: 'full'},
    {path: 'countries', component: CountryComponent},
];
