import { Component, OnInit } from '@angular/core';
import {Report} from "../../models/report";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  reports: Report[];
  totalCount: number;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<ReportsResponse>('/openmrs/ws/rest/v1/radiologyreport?totalCount=true&limit=1&startIndex=0&v=full').subscribe(
      data => {
        this.reports = data.results;
        this.totalCount = data.totalCount;
      },
      err => {
        console.log('An error occured');
      }
    );
  }

}

interface ReportsResponse {
  results: Report[];
  totalCount: number;
}
