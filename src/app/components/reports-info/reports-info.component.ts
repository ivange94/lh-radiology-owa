import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports-info',
  template: `
    <div class="list-group">
      <button type="button" class="list-group-item">Draft <span class="badge">23</span></button>
      <button type="button" class="list-group-item">Approved <span class="badge">19</span></button>
      <button type="button" class="list-group-item">Pending Signature <span class="badge">2</span></button>
    </div>
  `
})
export class ReportsInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
