import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TinymceModule } from 'angular2-tinymce';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrandComponent } from './brand/brand.component';
import { FooterComponent } from './footer/footer.component';
import { ReportEditorComponent } from './report-editor/report-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrandComponent,
    FooterComponent,
    ReportEditorComponent
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
