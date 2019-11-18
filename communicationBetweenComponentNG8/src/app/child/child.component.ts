import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() hero: any;
  @Output() messageFromChild = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  changedValue() {
    this.messageFromChild.emit('hello from child to parent');
  }
}
