import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-metadata',
  template: `
    <div class="panel panel-default">
      <div class="panel-body">
        <p>Judy W. Gichoya</p>
        <p>MRN: 121324</p>
        <p>Location: Eskanazi Health</p>
        <p>Study: CT Health without contrast</p>
      </div>
    </div>
  `
})
export class ReportMetadataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
