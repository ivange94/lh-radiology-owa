import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ReportTemplate} from "../models/report-template";
import {ReportTemplateService} from "../services/report-template.service";

@Component({
  selector: 'app-repport-template-details',
  template: `
    <a routerLink="/dashboard/templates" class="btn btn-primary"><span class="glyphicon glyphicon-chevron-left">Back</span></a><br><br>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Template Metadata</h3>
      </div>
      <div class="panel-body">
        <table>
          <tbody>
            <tr>
              <th>Title</th>
              <td>{{reportTemplate?.dcTermsTitle}}</td>
            </tr>
            <tr>
              <th>Identifier</th>
              <td>{{reportTemplate?.dcTermsIdentifier}}</td>
            </tr>
            <tr>
              <th>Creator</th>
              <td>{{reportTemplate?.dcTermsCreator}}</td>
            </tr>
            <tr>
              <th>Publisher</th>
              <td>{{reportTemplate?.dcTermsPublisher}}</td>
            </tr>
            <tr>
              <th>Rights</th>
              <td>{{reportTemplate?.dcTermsRights}}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{{reportTemplate?.dcTermsDescription}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class ReportTemplateDetailsComponent implements OnInit {

  reportTemplate: ReportTemplate;

  constructor(
    private route: ActivatedRoute,
    private reportTemplateService: ReportTemplateService
  ) {}

  ngOnInit() {
    this.reportTemplateService.get(this.getUuid()).subscribe(data => {
      this.reportTemplate = data;
    });
  }

  private getUuid() {
    let uuid;
    this.route.paramMap
      .switchMap((params: ParamMap) => uuid = params.get('uuid')).subscribe();
    return uuid;
  }

}
