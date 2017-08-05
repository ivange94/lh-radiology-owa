import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';
import {Order} from "../../../models/order";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-view-order',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order: Order;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<Order>(this.getUrl()).subscribe(
      data => {
        console.log(data);
        this.order = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  onChange(value: string) {
    console.log(value);
  }

  goBack() {
    this.location.back();
  }

  getUrl() {
    var uuid;
    this.route.paramMap
      .switchMap((params: ParamMap) => uuid = params.get('uuid')).subscribe();
    return '/openmrs/ws/rest/v1/radiologyorder/' + uuid + '?v=full';
  }
}
