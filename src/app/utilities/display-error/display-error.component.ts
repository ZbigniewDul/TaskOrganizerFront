import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-error',
  templateUrl: './display-error.component.html',
  styleUrls: ['./display-error.component.css']
})
export class DisplayErrorComponent implements OnInit {

  constructor() { }

  @Input()
  errors: string[] = [];

  ngOnInit(): void {
  }

}
