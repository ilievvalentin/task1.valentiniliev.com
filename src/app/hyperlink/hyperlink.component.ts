import {Component, Input, OnInit} from '@angular/core';
import {Hyperlink} from './model/hyperlink';

@Component({
  selector: 'app-hyperlink',
  templateUrl: './hyperlink.component.html',
  styleUrls: ['./hyperlink.component.css']
})
export class HyperlinkComponent implements OnInit {

  @Input() public hyperlink: Hyperlink;

  private url;

  public favicon;

  constructor() { }

  ngOnInit(): void {
    this.url = new URL(this.hyperlink.link);
    this.favicon = this.url.protocol + this.url.host + '/favicon.ico';
  }

}
