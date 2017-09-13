import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('myAnimation', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AnimationComponent implements OnInit {
  public items;
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        state :  'active',
        name : 'Active 1'
      },
      {
        state :  'inactive',
        name : 'Inactive 1'
      },
      {
        state :  'active',
        name : 'Active 2'
      },
    ];
  }

  public  toggleState(item) {
    item.state = item.state === 'inactive' ? 'active' : 'inactive';
  }
}
