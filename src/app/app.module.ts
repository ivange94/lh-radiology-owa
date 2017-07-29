import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TinymceModule } from 'angular2-tinymce';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrandComponent } from './components/brand/brand.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReportEditorComponent } from './components/report-editor/report-editor.component';
import { ReportsInfoComponent } from './components/reports-info/reports-info.component';
import { ReportMetadataComponent } from './components/report-metadata/report-metadata.component';
import { ReportActionsComponent } from './components/report-actions/report-actions.component';
import { ReportAuthoringComponent } from './components/report-authoring/report-authoring.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AppRoutingModule } from "./app-routing.module";
import { ReportsComponent } from './components/reports/reports.component';
import { ReportTemplatesComponent } from './components/report-templates/report-templates.component';
import { AddOrderComponent } from './components/orders/add-order/add-order.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SigninComponent } from './components/signin/signin.component';
import { OrderService } from "./services/order.service";
import { OrderDetailComponent } from './components/orders/order-detail/order-detail.component';
import {ReportService} from "./services/report.service";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {ReportTemplateService} from "./services/report-template.service";
import {OrdersTableComponent} from "./components/orders-table.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrandComponent,
    FooterComponent,
    ReportEditorComponent,
    ReportsInfoComponent,
    ReportMetadataComponent,
    ReportActionsComponent,
    ReportAuthoringComponent,
    OrdersComponent,
    ReportsComponent,
    ReportTemplatesComponent,
    AddOrderComponent,
    DashboardComponent,
    SigninComponent,
    OrderDetailComponent,
    OrdersTableComponent
  ],
  imports: [
    BrowserModule,
    TinymceModule.withConfig({}),
    FormsModule,
    AppRoutingModule,
    Ng2Bs3ModalModule
  ],
  providers: [OrderService, ReportService, ReportTemplateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
