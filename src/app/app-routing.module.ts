import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import { OrdersComponent } from './components/orders/orders.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ReportTemplatesComponent } from './components/report-templates/report-templates.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SigninComponent } from './components/signin/signin.component';
import { ReportAuthoringComponent } from './components/report-authoring/report-authoring.component'
import { OrderDetailComponent } from './components/orders/order-detail/order-detail.component';
import { ReportDetailComponent } from './components/reports/report-detail/report-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard/orders', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: '', redirectTo: 'orders', pathMatch: 'full'},
    {path: 'orders', component: OrdersComponent},
    {path: 'reports', component: ReportsComponent},
    {path: 'templates', component: ReportTemplatesComponent},
  ]},
  {path: 'signin', component: SigninComponent},
  {path: 'add-report', component: ReportAuthoringComponent},
  {path: 'order/:uuid', component: OrderDetailComponent},
  {path: 'report/:uuid', component: ReportDetailComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
