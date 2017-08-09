import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-authoring',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-xs-8">
          <app-report-metadata></app-report-metadata>
        </div>
        <div class="col-xs-4">
          <app-reports-info></app-reports-info>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <app-report-editor [elementId]="'reportEditorId'"></app-report-editor>
        </div>
      </div>
      <div class="row" id="reportActions">
        <div class="col-xs-10 col-md-offset-2">
          <app-report-actions></app-report-actions>
        </div>
      </div>
    </div>
  `,
  styles: [`
    #reportActions {
      padding-top: 30px;
    }
  `]
})
export class ReportAuthoringComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
