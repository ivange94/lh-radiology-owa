import { Component, OnInit } from '@angular/core';
import {Report} from "../../models/report";
import {ReportService} from "../../services/report.service";

@Component({
  selector: 'app-reports',
  template: `
    <div class="panel panel-primary box">
      <div class="panel-heading">
        <h3 class="panel-title">Radiology Reports</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped table-hover">
          <thead>
          <tr>
            <th>Radiology Order</th>
            <th>Principal Results Interpreter</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          <tr *ngFor="let report of reports">
            <td>{{report?.radiologyOrder?.display}}</td>
            <td>{{report?.principalResultsInterpreter?.display}}</td>
            <td>{{report?.date | date}}</td>
            <td>{{report?.status}}</td>
            <td><a [routerLink]="['/report', report.uuid]"><span class="glyphicon glyphicon-eye-open"></span></a></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class ReportsComponent implements OnInit {

  reports: Report[];
  startIndex: number = 0;

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.reportService.fetch(this.startIndex, 10).subscribe(data => {
      this.reports = data;
    });
  }

}
