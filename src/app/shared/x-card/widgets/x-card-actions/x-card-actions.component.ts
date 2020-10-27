import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-x-card-actions',
  templateUrl: './x-card-actions.component.html',
  styleUrls: ['./x-card-actions.component.css']
})
export class XCardActionsComponent implements OnInit {
  @Input() id;
  @Output() delete = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  deleteNote(id: number) {}
}
