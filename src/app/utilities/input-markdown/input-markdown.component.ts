import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  constructor() { }

  @Output()
  changeMarkDown = new EventEmitter<string>();

  @Input()
  markdownContent: any;

  @Input()
  label = 'Value';

  ngOnInit(): void {
  }

  onChangesMarkdown(event: Event){
    this.changeMarkDown.emit((event.target as HTMLTextAreaElement).value)
  }

}
