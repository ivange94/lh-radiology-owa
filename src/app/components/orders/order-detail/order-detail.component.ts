import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import {OrderService} from "../../../services/order.service";

import 'rxjs/add/operator/switchMap';
import {Order} from "../../../models/order";

@Component({
  selector: 'app-view-order',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order: Order;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.orderService.getOrder(+params.get('id')))
      .subscribe(order => this.order = order);
  }

  onChange(value: string) {
    console.log(value);
  }

  goBack() {
    this.location.back();
  }
}
