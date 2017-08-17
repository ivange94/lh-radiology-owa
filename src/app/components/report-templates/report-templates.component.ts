import { Component, OnInit } from '@angular/core';
import {ReportTemplate} from "../../models/report-template";
import {HttpClient} from "@angular/common/http";

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
        <td>{{template?.templateId}}</td>
        <td>{{template?.dcTermsTitle}}</td>
        <td>{{template?.dcTermsCreator}}</td>
        <td>{{template?.dcTermsPublisher}}</td>
        <td><a [routerLink]="['/reporttemplate', template?.uuid]"><span class="glyphicon glyphicon-eye-open"></span></a></td>
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
  totalCount: number;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<Res>('/openmrs/ws/rest/v1/mrrtreporttemplate?v=full&totalCount=true').subscribe(data => {
      this.reportTemplates = data.results;
      this.totalCount = data.totalCount;
    });
  }

}

interface Res {
  results: ReportTemplate[];
  totalCount: number;
}
