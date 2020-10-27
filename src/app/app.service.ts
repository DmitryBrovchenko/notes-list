import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Note } from './interfaces/note.interface';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AppService {
   data: Note[] = [
    {id: 1, title: 'title 1', content: 'some content'},
     {id: 2, title: 'title 2', content: 'some content 2'},
     {id: 3, title: 'title 3', content: 'some other content 2'},
  ];
   getData(filter?: string): Observable<Note[]> {
     return of(this.data).pipe(
       delay(this.randomDelay()),
       map(data => data.filter(d => !filter || d.title.includes(filter) || d.content.includes(filter)))
     );
   }
   randomDelay(): number {
     return 50 + 450 * Math.random();
   }

   delete(id: number): Observable<number> {
     this.data = this.data.filter(d => d.id !== id);
     return of(1);
   }
}
