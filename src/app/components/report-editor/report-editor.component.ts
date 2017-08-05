import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-report-editor',
  templateUrl: './report-editor.component.html',
  styleUrls: ['./report-editor.component.css']
})
export class ReportEditorComponent implements OnInit {

  content: string;

  @Input() disable: boolean;

  constructor() { }

  ngOnInit() {
  }

}
