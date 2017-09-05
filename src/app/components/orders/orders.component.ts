import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../services/order.service";
import {Order} from "../../models/order";

@Component({
  selector: 'app-orders',
  template: `    
    <a class="btn btn-default add-order" (click)="modal.open()">Add Order</a>
    <modal #modal [size]="'lg'">
      <modal-header [show-close]="true">
        <h4 class="modal-title">New Order</h4>
      </modal-header>
      <modal-body>
        <form>
          <app-add-order></app-add-order>
        </form>
      </modal-body>
      <modal-footer [show-default-buttons]="true"></modal-footer>
    </modal>
    <div class="panel panel-primary box">
      <div class="panel-heading">
        <h3 class="panel-title">Radiology Orders</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped table-hover">
          <thead>
          <tr>
            <th>Accession No.</th>
            <th>Patient</th>
            <th>Urgency</th>
            <th>Imaging Procedure</th>
            <th>Referring Physician</th>
            <th>Scheduled Date</th>
            <th>Date Activated</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          <tr *ngFor="let order of orders">
            <td>{{order.accessionNumber}}</td>
            <td>{{order.patient.display}}</td>
            <td>{{order.urgency}}</td>
            <td>{{order.concept.display}}</td>
            <td>{{order.orderer.display}}</td>
            <td>{{order.scheduledDate | date}}</td>
            <td>{{order.dateActivated | date}}</td>
            <td><a [routerLink]="['/order', order.uuid]"><span class="glyphicon glyphicon-eye-open"></span></a></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [
    `
      .add-order {
        margin-top: 20px;
      }
    `
  ]
})
export class OrdersComponent implements OnInit {

  orders: Order[];
  startIndex: number = 0;

  constructor(
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.orderService.fetch(this.startIndex, 10).subscribe(orders => {
      this.orders = orders;
    });
  }

}
