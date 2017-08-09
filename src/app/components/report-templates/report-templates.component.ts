import { Component, OnInit } from '@angular/core';
import {ReportTemplate} from "../../models/report-template";
import {ReportTemplateService} from "../../services/report-template.service";

@Component({
  selector: 'app-report-templates',
  template: `
    <a class="btn btn-default new-template" (click)="modal.open()">Import Report Template</a>

    <modal #modal>
      <modal-header [show-close]="true">
        <h4 class="modal-title">Import New Template</h4>
      </modal-header>
      <modal-body>
        <form>
          <input type="file"><br>
          <input type="submit" value="Upload" (click)="modal.close()">
        </form>
      </modal-body>
      <modal-footer [show-default-buttons]="true"></modal-footer>
    </modal>
    <table class="table table-striped table-hover">
      <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Creator</th>
        <th>Publisher</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let template of reportTemplates">
        <td>{{template.templateId}}</td>
        <td>{{template.dcTermsTitle}}</td>
        <td>{{template.dcTermsCreator}}</td>
        <td>{{template.dcTermsPublisher}}</td>
        <td><a><span class="glyphicon glyphicon-eye-open"></span></a></td>
      </tr>
      </tbody>
    </table>
  `,
  styles: [`
    .new-template {
      margin-top: 20px;
    }
  `]
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
