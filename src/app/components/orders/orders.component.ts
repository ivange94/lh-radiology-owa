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
        <app-orders-table></app-orders-table>
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

  ngOnInit() {

  }

}
