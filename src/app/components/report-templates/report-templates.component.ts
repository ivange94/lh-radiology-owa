import { Component, OnInit } from '@angular/core';
import {ReportTemplate} from "../../models/report-template";
import {ReportTemplateService} from "../../services/report-template.service";

@Component({
  selector: 'app-report-templates',
  templateUrl: './report-templates.component.html',
  styleUrls: ['./report-templates.component.css']
})
export class ReportTemplatesComponent implements OnInit {

  reportTemplates: ReportTemplate[];

  constructor(
    private reportTemplateService: ReportTemplateService
  ) { }

  ngOnInit() {
    this.reportTemplateService.getReportTemplates().then(reportTemplates => this.reportTemplates = reportTemplates);
  }

}
