import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TinymceModule } from 'angular2-tinymce';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrandComponent } from './brand/brand.component';
import { FooterComponent } from './footer/footer.component';
import { ReportEditorComponent } from './report-editor/report-editor.component';
import { ReportsInfoComponent } from './reports-info/reports-info.component';
import { ReportMetadataComponent } from './report-metadata/report-metadata.component';
import { ReportActionsComponent } from './report-actions/report-actions.component';
import { ReportAuthoringComponent } from './report-authoring/report-authoring.component';
import { OrdersComponent } from './orders/orders.component';
import {AppRoutingModule} from "./app-routing.module";
import { ReportsComponent } from './reports/reports.component';
import { ReportTemplatesComponent } from './report-templates/report-templates.component';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import {DashboardComponent} from "./dashboard.component";
import { SigninComponent } from './signin/signin.component';

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
    SigninComponent
  ],
  imports: [
    BrowserModule,
    TinymceModule.withConfig({}),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
