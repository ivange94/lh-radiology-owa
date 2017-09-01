import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-order',
  template: `
    <div class="container" class="add-order" xmlns="http://www.w3.org/1999/html">
      <form class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label">Patient<span class="required">*</span></label>
          <div class="col-sm-10">
            <app-search (notify)="order.patient = $event" [baseUrl]="'/openmrs/ws/rest/v1/patient'" [placeholder]="'Patient'"></app-search>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Imaging Procedure<span class="required">*</span></label>
          <div class="col-sm-10">
            <app-search (notify)="order.concept = $event" [baseUrl]="'/openmrs/ws/rest/v1/concept'" [placeholder]="'Concept'"></app-search>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Reason (Coded) </label>
          <div class="col-sm-10">
            <app-search (notify)="0" [baseUrl]="'/openmrs/ws/rest/v1/concept'" [placeholder]="'Concept'"></app-search>
          </div>
        </div>
        <div class="form-group">
          <label for="reasonText" class="col-sm-2 control-label">Reason (Free Text)</label>
          <div class="col-sm-10">
            <textarea #reason (keyup)="0" class="form-control" rows="3" id="reasonText"></textarea>
          </div>
        </div>
        <div class="form-group">
          <label for="clinicalHistory" class="col-sm-2 control-label">Clinical History</label>
          <div class="col-sm-10">
            <textarea #history class="form-control" rows="3" id="clinicalHistory"></textarea>
          </div>
        </div>
        <div class="form-group">
          <label for="urgency" class="col-sm-2 control-label">Urgency</label>
          <div class="col-sm-10">
            <select #urgency (select)="order.urgency = urgency.value" name="urgency" id="urgency">
              <option value="ROUTINE">Routine</option>
              <option value="STAT">Emergency</option>
              <option value="ON_SCHEDULED_DATE">On scheduled date</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="reasonText" class="col-sm-2 control-label">Performed status</label>
          <div class="col-sm-10">
            <select #status (select)="0" name="status" id="status">
              <option value="IN_PROGRESS">IN PROGRESS</option>
              <option value="COMPLETED">COMPLETED</option>
              <option value="DISCONTINUED">CANCELED</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="instructions" class="col-sm-2 control-label">Instructions</label>
          <div class="col-sm-10">
            <textarea #instructions (keyup)="0" class="form-control" rows="3" id="instructions"></textarea>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Orderer<span class="required">*</span></label>
          <div class="col-sm-10">
            <app-search (notify)="order.orderer = $event" [baseUrl]="'/openmrs/ws/rest/v1/provider'" [placeholder]="'Provider'"></app-search>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <!-- <button type="submit" class="btn btn-default">Save order</button> -->
            <button class="btn btn-default" (click)="saveOrder()">Save Order</button>
          </div>
        </div>
      </form>
    </div>
  `,
  styles: [
  `
    span.required {
      color: red;
    }
  
    .add-order {
      width: 80%;
    }
  `
  ]
})
export class AddOrderComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  order: Order;

  ngOnInit() {
    this.order = new Order();
  }

  saveOrder() {
    console.log(JSON.stringify(this.order));
    this.http.post('/openmrs/ws/rest/v1/radiologyorder', this.order).subscribe(response => console.log(response));
  }

}

class Order {
  patient: string;
  concept: string;
  orderer: string;
}

