import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-x-card',
  templateUrl: './x-card.component.html',
  styleUrls: ['./x-card.component.css']
})
export class XCardComponent implements OnInit {
  @Input() title;
  @Input() content;
  @Input() id;
  @Output() deleteNote = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }


}
