import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import {HttpClient, HttpParams} from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  private baseUrl = "/openmrs/ws/rest/v1/radiologyorder";

  constructor(
    private http: HttpClient
  ) { }

  fetch(startIndex: number, limit: number): Observable<Order[]> {
    let params = new HttpParams();
    params = params.set('startIndex',startIndex.toString()).set('limit',limit.toString()).set('v', 'full').set('totalCount', 'true');

    return this.http.get(this.baseUrl, {
      params
    })
      .map(res => res['results'] as Order[] || [])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occured ', error);
    return Promise.reject(error.message || error);
  }
}
