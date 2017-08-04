import {Component, Input, OnInit} from "@angular/core";
import {Order} from "../models/order";
import {CustomHttpClient} from "../CustomHttpClient";
import {HttpClient} from "@angular/common/http";

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
        <td><a [routerLink]="['/orders', order.uuid]"><span class="glyphicon glyphicon-eye-open"></span></a></td>
      </tr>
      </tbody>
    </table>
  `
})
export class OrdersTableComponent implements OnInit{

  orders: Order[];
  totalCount: number;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http.get<OrdersResponse>('/openmrs/ws/rest/v1/radiologyorder?totalCount=true&limit=10&startIndex=0&v=full').subscribe(
      data => {
        this.orders = data.results;
        this.totalCount = data.totalCount;
      },
      err => {
        console.log(err.error.message);
      }
    );
  }
}

interface OrdersResponse {
  results: Order[];
  totalCount: number;
}
