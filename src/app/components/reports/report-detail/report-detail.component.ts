import {Component, OnInit} from "@angular/core";

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';
import {HttpClient} from "@angular/common/http";
import {Report} from "../../../models/report";

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
    private location: Location,
    private http: HttpClient
  ) { }

  ngOnInit(){
    this.http.get<Report>(this.getUrl()).subscribe(
      data => {
        this.report = data;
      },
      err => {

      }
    );
  }

  getUrl() {
    var uuid;
    this.route.paramMap
      .switchMap((params: ParamMap) => uuid = params.get('uuid')).subscribe();
    return '/openmrs/ws/rest/v1/radiologyreport/' + uuid + '?v=full';
  }
}
