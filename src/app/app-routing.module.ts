import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import { OrdersComponent } from './orders/orders.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportTemplatesComponent } from './report-templates/report-templates.component';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { DashboardComponent } from './dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { ReportAuthoringComponent } from './report-authoring/report-authoring.component'

const routes: Routes = [
  {path: '', redirectTo: 'dashboard/orders', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: 'orders', component: OrdersComponent, children: [

    ]},
    {path: 'reports', component: ReportsComponent},
    {path: 'templates', component: ReportTemplatesComponent}
  ]},
  {path: 'add-order', component: AddOrderComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'add-report', component: ReportAuthoringComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
