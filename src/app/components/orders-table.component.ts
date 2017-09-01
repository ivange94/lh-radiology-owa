import {Component, OnInit} from "@angular/core";
import {Order} from "../models/order";
import {OrderService} from "../services/order.service";

@Component({
  selector: 'app-orders-table',
  template: `    
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
  `
})
export class OrdersTableComponent implements OnInit{

  orders: Order[];
  startIndex: number = 0;

  constructor(
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.orderService.fetch(this.startIndex, 10).subscribe(orders => {
      this.orders = orders;
      this.startIndex = orders.length;
    });
  }
}
