import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import {Order} from "../../../models/order";
import {OrderService} from "../../../services/order.service";

@Component({
  selector: 'app-view-order',
  template:
  `
    <div class="container">
      <a class="btn btn-primary" routerLink="/dashboard/orders"><span class="glyphicon glyphicon-chevron-left"></span>Back</a><br><br>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">{{order?.patient?.display}} | Radiology Order </h3>
        </div>
        <div class="panel-body">
          <p><strong>Accession Number</strong> {{order?.accessionNumber}}</p>
          <p><strong>Imaging Procedure</strong> {{order?.concept?.display}}</p>
          <p><strong>Reason (Coded</strong>)	{{order?.orderReason?.display}}</p>
          <p><strong>Reason (Free Text)</strong>	{{order?.orderReasonNonCoded}}</p>
          <p><strong>Orderer</strong> {{order?.orderer?.display}}</p>
          <p><strong>Urgency</strong> {{order?.urgency}}</p>
          <p><strong>Scheduled Date</strong> {{order?.dateActivated | date}}</p>
          <p><strong>Stop Date</strong> {{order?.dateStopped | date}}</p>
          <p><strong>Instructions</strong> {{order?.instructions}}</p>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Report</h3>
        </div>
        <div class="panel-body">
          <label for="reportType">Report Type</label>
          <select name="reportType" id="reportType" #box (change)="0">
            <option value="FREE">Free Text Report</option>
            <option value="MRRT">MRRT Report</option>
          </select>
          <div *ngIf="box.value === 'MRRT'">
            <label for="reportTemplate">Report Template</label>
            <input type="text" id="reportTemplate">
          </div>
          <div>
            <a class="btn btn-default claim-report-btn" [routerLink]="['/add-report']">Claim Report</a>
          </div>
        </div>
      </div>
    </div>

  `,
  styles: [`    
    .claim-report-btn {
      margin-top: 20px;
    }

  `]
})
export class OrderDetailComponent implements OnInit {

  order: Order;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    let uuid = this.getUuid();
    this.orderService.get(uuid).subscribe(
      data => {
        this.order = data;
      },
      err => {
        console.log(err.error.message);
      }
    );
  }

  private getUuid() {
    let uuid;
    this.route.paramMap
      .switchMap((params: ParamMap) => uuid = params.get('uuid')).subscribe();
    return uuid;
  }
}
