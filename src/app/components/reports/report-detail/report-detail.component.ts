import {Component, OnInit} from "@angular/core";

import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import {Report} from "../../../models/report";
import {ReportService} from "../../../services/report.service";

@Component({
  selector: 'app-report-detail',
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
          <app-report-editor [elementId]="'reportEditorId'" [readonly]="report?.status === 'COMPLETED'" [content]="report?.body"></app-report-editor>
        </div>
      </div>
    </div>
  `
})
export class ReportDetailComponent implements OnInit {

  report: Report;

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.reportService.get(this.getUuid()).subscribe(data => {
      this.report = data;
    });
  }

  private getUuid() {
    var uuid;
    this.route.paramMap
      .switchMap((params: ParamMap) => uuid = params.get('uuid')).subscribe();
    return uuid;
  }
}
