import { Component, OnInit, Input } from '@angular/core';
import * as _ from "lodash";
import { VennApiService } from '../venn-api.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private vennApiService : VennApiService) { }

  @Input()
  private photos: any;
  @Input()
  private metadata: any;

  ngOnInit() {

  }

  getPages(numberOfPages) {
    return _.range(1,numberOfPages);
  }

  selectPage(page) {
    return this.vennApiService.search(this.vennApiService.query,page).subscribe((response) => {
      this.photos = response;
    });
  }
}
