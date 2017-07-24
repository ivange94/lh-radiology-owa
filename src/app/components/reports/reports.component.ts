import { Component, OnInit } from '@angular/core';
import {ReportService} from "../../services/report.service";
import {Report} from "../../models/report";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  reports: Report[];

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.reportService.getReports().then(reports => this.reports = reports);
  }

}
