import { Component, OnInit } from '@angular/core';
import {HyperlinksService} from '../hyperlink/service/hyperlinks.service';
import {Hyperlink} from '../hyperlink/model/hyperlink';

@Component({
  selector: 'app-hyperlinks',
  templateUrl: './hyperlinks.component.html',
  styleUrls: ['./hyperlinks.component.css']
})
export class HyperlinksComponent implements OnInit {

  public hyperlinks: Hyperlink[];

  constructor(private hyperlinksService: HyperlinksService) { }

  ngOnInit(): void {
    this.hyperlinksService.getHyperlinks().subscribe(
      next => {
        this.hyperlinks.push(next as Hyperlink);
      }
    );
  }

}
