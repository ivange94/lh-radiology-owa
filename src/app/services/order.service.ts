import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import {orders} from "../mock-db";

@Injectable()
export class OrderService {

  constructor() { }

  getOrders(): Promise<Order[]> {
    return Promise.resolve(orders);
  }

  getOrder(accessionNumber: number): Promise<Order> {
    return this.getOrders().then(orders => orders.find(order => order.accessionNumber === accessionNumber));
  }

  addOrder(order: Order): void {
    this.getOrders().then(orders => orders.push(order));
  }

}
