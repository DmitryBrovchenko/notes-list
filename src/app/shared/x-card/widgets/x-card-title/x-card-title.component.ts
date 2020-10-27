import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-x-card-title',
  templateUrl: './x-card-title.component.html',
  styleUrls: ['./x-card-title.component.css']
})
export class XCardTitleComponent implements OnInit {
  @Input() title;
  constructor() { }

  ngOnInit(): void {
  }

}
