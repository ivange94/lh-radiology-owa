import {Injectable, OnInit} from '@angular/core';
import {Report} from "../models/report";
import {reports} from "../mock-db";

@Injectable()
export class ReportService implements OnInit {

  constructor() { }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  getReports(): Promise<Report[]> {
    return Promise.resolve(reports);
  }

  getReport(uuid: string): Promise<Report> {
    return this.getReports().then(reports => reports.find(report => report.uuid === uuid));
  }
}
