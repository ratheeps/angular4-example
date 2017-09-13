import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public birthday;
  public string;
  public name;
  constructor() { }

  ngOnInit() {
    this.birthday = new Date(1988, 3, 15); // April 15, 1988
    this.string = 'Hello';
    this.name = 'Ratheep';
  }

}
