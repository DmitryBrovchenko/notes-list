import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Note } from '../interfaces/note.interface';
import { debounceTime } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { loadNotes, updateFilter } from './@ngrx/search.actions';
import { Observable } from 'rxjs';
import { SearchState } from './@ngrx/search.reducer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  filter: FormControl;
  data$: Observable<Note[]>;
  constructor(private store: Store<SearchState>) {
    this.data$ = store.pipe(
      select(state => state.notes)
    )
    ;
  }

  ngOnInit(): void {
    this.store.dispatch(loadNotes());
    this.filter = new FormControl();
    this.filter.valueChanges.pipe(debounceTime(500)).subscribe((filter) => {
      console.log(this.store.select(store => store));
      this.store.dispatch(updateFilter({filter}));
    });
  }

}
