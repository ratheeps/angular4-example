import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    // this.get();
  }

  get() {
    // this.countryService.get().subscribe(results => {
    //     console.log(results);
    // });
  }
}
