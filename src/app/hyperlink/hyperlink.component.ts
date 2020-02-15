import {Component, Input, OnInit} from '@angular/core';
import {Hyperlink} from './model/hyperlink';

@Component({
  selector: 'app-hyperlink',
  templateUrl: './hyperlink.component.html',
  styleUrls: ['./hyperlink.component.css']
})
export class HyperlinkComponent implements OnInit {

  @Input() public hyperlink: Hyperlink;

  constructor() { }

  ngOnInit(): void {
  }

}
