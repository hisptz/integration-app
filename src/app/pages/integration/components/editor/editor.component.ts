import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() code: string;
  editorOptions: any;

  @Output() codeUpdate: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {
    this.editorOptions = { theme: 'vs-dark', language: 'javascript' };
  }

  onCodeUpdate(code: string) {
    this.codeUpdate.emit(code);
  }
}
