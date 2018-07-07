import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
  fileStrategy: any = [
    {
    displayValue: 'PDF',
    value: 'PDF'
  },
  {
    displayValue: 'JPG',
    value: 'JPG'
  }
];

  constructor() { }

  ngOnInit() {
  }

}
