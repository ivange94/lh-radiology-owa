import {Component, OnInit} from "@angular/core";

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';
import {HttpClient} from "@angular/common/http";
import {Report} from "../../../models/report";

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html'
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
