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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrandComponent,
    FooterComponent,
    ReportEditorComponent,
    ReportsInfoComponent,
    ReportMetadataComponent,
    ReportActionsComponent
  ],
  imports: [
    BrowserModule,
    TinymceModule.withConfig({}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
