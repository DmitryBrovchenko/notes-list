import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-x-card-content',
  templateUrl: './x-card-content.component.html',
  styleUrls: ['./x-card-content.component.css']
})
export class XCardContentComponent implements OnInit {
@Input() content;
  constructor() { }

  ngOnInit(): void {
  }

}
