import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hyperlink} from './shared/hyperlink.model';
import {HyperlinkService} from './shared/hyperlink.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public hyperlinks: Hyperlink[];

  private subscription: Subscription;

  constructor(private hyperlinkService: HyperlinkService) {
  }

  ngOnInit(): void {
    this.subscription = this.hyperlinkService.getAll().subscribe(next => this.hyperlinks = next as Hyperlink[]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
