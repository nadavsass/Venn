import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { VennApiService } from '../venn-api.service';
import {switchMap, debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  searchForm: any;
  photos: any;

  constructor(private vennApiService: VennApiService) { }

  @Output('searchResults')
  private searchResults = new EventEmitter();

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });

    this.searchForm.controls['search'].valueChanges.pipe(
      debounceTime(500),
      switchMap((query: string) => {
        return this.vennApiService.search(query,this.vennApiService.page);
      })
    ).subscribe((response) => {
      this.photos = response.results;
      this.searchResults.emit(response);
    });
  }

  getTerms() {
    return JSON.parse(localStorage.getItem('terms'));
  }
  saveTerm(term) {
    const TERMS = 'terms';
    let terms = (JSON.parse(localStorage.getItem(TERMS)) || []) as string[];
    // handle duplicates
    terms.push(term);

    localStorage.setItem(TERMS, JSON.stringify(terms));
  }

  saveResults(query) {
      this.vennApiService.saveResults(query, this.photos);
  }

  searchTerm(term) {
    const results = JSON.parse(localStorage.getItem(term));
    this.searchResults.emit({results});
    // I assume the data is always avaiable in local storage.
  }
}
