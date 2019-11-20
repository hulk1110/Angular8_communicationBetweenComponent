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
      name: 'Superman',
      age: 52
    },
    {
      name: 'Shaktiman',
      age: 42
    },
    {
      name: 'gangadhar',
      age: 55
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
