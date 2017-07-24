import { Injectable } from '@angular/core';
import {ReportTemplate} from "../models/report-template";
import {reportTemplates} from "../mock-db";

@Injectable()
export class ReportTemplateService {

  constructor() { }

  getReportTemplates(): Promise<ReportTemplate[]> {
    return Promise.resolve(reportTemplates);
  }

  getReportTemplate(uuid: string) {
    this.getReportTemplates().then(reportTemplates => reportTemplates.find(reportTemplate => reportTemplate.uuid === uuid))
  }

}
