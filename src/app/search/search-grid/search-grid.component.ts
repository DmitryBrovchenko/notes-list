import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../interfaces/note.interface';
import { Store } from '@ngrx/store';
import { deleteNote } from '../@ngrx/search.actions';

@Component({
  selector: 'app-search-grid',
  templateUrl: './search-grid.component.html',
  styleUrls: ['./search-grid.component.css']
})
export class SearchGridComponent implements OnInit {
  @Input() data: Note[];
  constructor(private store: Store) { }

  ngOnInit(): void {
  }
  deleteNote(id: number) {
    this.store.dispatch(deleteNote({ id }));
  }

}
