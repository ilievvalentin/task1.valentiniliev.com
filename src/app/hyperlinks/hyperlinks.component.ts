import {Component, OnDestroy, OnInit} from '@angular/core';
import {HyperlinksService} from '../hyperlink/service/hyperlinks.service';
import {Hyperlink} from '../hyperlink/model/hyperlink';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-hyperlinks',
  templateUrl: './hyperlinks.component.html',
  styleUrls: ['./hyperlinks.component.css']
})
export class HyperlinksComponent implements OnInit {

  public hyperlinks: Hyperlink[];

  public observable: Subscription;

  constructor(private hyperlinksService: HyperlinksService) { }

  ngOnInit(): void {
    this.hyperlinksService.getHyperlinks().subscribe(
      next => {
        this.hyperlinks = next;
      }
    );
  }

  public href(url) {
    document.location.href = url;
  }

}
