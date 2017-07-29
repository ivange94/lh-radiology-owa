import {Component, Input} from "@angular/core";
import {Order} from "../models/order";

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
        <td>Order.Patient.display</td>
        <td>Routine</td>
        <td>X-RAY</td>
        <td>Dr Smith</td>
        <td>{{order.scheduledDate?.toDateString()}}</td>
        <td>{{order.dateActivated?.toDateString()}}</td>
        <td><a [routerLink]="['/orders', order.accessionNumber]"><span class="glyphicon glyphicon-eye-open"></span></a></td>
      </tr>
      </tbody>
    </table>
  `
})
export class OrdersTableComponent {

  @Input() orders: Order[];
}
