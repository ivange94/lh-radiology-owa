import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-report-editor',
  template: `<textarea id="{{elementId}}" rows="10" >{{content}}</textarea>`
})
export class ReportEditorComponent implements AfterViewInit, OnDestroy {

  @Input() elementId: string;
  @Input() readonly : boolean;
  @Input() content: string;

  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      skin_url: '/openmrs/owa/radiology/assets/tinymce/skins/lightgray',
      readonly: this.readonly,
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        })
      }
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}
