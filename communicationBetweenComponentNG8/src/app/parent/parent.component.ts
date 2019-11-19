import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  heros: any;
  childs: any[] = ['child1', 'child2', 'child3'];


  constructor() {
    this.heros = [{
      name: 'h1',
      age: 22
    },
    {
      name: 'h1',
      age: 22
    },
    {
      name: 'h1',
      age: 22
    }];
  }

  ngOnInit() {
  }
  displayMessageFromChild(messageFromChile: any) {
    alert(messageFromChile);
  }

  addToMyself(eventFromChild: string) {
    this.childs.push(eventFromChild);
  }

}
