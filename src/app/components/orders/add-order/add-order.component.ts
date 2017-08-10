import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-order',
  template: `    
    <div class="container" class="add-order">
      <form class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label">Patient<span class="required">*</span></label>
          <div class="col-sm-10">
            <app-search (notify)="getPatientUuid($event)" [baseUrl]="'/openmrs/ws/rest/v1/patient'" [placeholder]="'Patient'"></app-search>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Imaging Procedure<span class="required">*</span></label>
          <div class="col-sm-10">
            <app-search (notify)="getImagingProcudureUuid($event)" [baseUrl]="'/openmrs/ws/rest/v1/concept'" [placeholder]="'Concept'"></app-search>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Reason (Coded) </label>
          <div class="col-sm-10">
            <app-search (notify)="getReasonConceptUuid($event)" [baseUrl]="'/openmrs/ws/rest/v1/concept'" [placeholder]="'Concept'"></app-search>
          </div>
        </div>
        <div class="form-group">
          <label for="reasonText" class="col-sm-2 control-label">Reason (Free Text)</label>
          <div class="col-sm-10">
            <textarea class="form-control" rows="3" id="reasonText"></textarea>
          </div>
        </div>
        <div class="form-group">
          <label for="clinicalHistory" class="col-sm-2 control-label">Clinical History</label>
          <div class="col-sm-10">
            <textarea class="form-control" rows="3" id="clinicalHistory"></textarea>
          </div>
        </div>
        <div class="form-group">
          <label for="urgency" class="col-sm-2 control-label">Urgency</label>
          <div class="col-sm-10">
            <select name="urgency" id="urgency">
              <option value="Routine">Routine</option>
              <option value="Emergency">Emergency</option>
              <option value="On_Scheduled_date">On scheduled date</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="reasonText" class="col-sm-2 control-label">Performed status</label>
          <div class="col-sm-10">
            <select name="status" id="status">
              <option value="in_progress">IN PROGRESS</option>
              <option value="completed">COMPLETED</option>
              <option value="canceled">CANCELED</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="instructions" class="col-sm-2 control-label">Instructions</label>
          <div class="col-sm-10">
            <textarea class="form-control" rows="3" id="instructions"></textarea>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Orderer<span class="required">*</span></label>
          <div class="col-sm-10">
            <app-search (notify)="getProviderUuid($event)" [baseUrl]="'/openmrs/ws/rest/v1/provider'" [placeholder]="'Provider'"></app-search>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <!-- <button type="submit" class="btn btn-default">Save order</button> -->
            <a [routerLink]="['/app/orders']" class="btn btn-default">Save Order</a>
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

  constructor() { }

  ngOnInit() {
  }

  getPatientUuid(uuid) {
    console.log(uuid);
  }

  getImagingProcudureUuid(uuid) {
    console.log(uuid);
  }

  getReasonConceptUuid(uuid) {
    console.log(uuid);
  }

  getProviderUuid(uuid) {
    console.log(uuid);
  }

}
