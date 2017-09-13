import {Routes} from '@angular/router';

import {
  DashboardComponent
} from './component/master';

export const routes: Routes = [
    {path: '', component: DashboardComponent, pathMatch: 'full'},
];
