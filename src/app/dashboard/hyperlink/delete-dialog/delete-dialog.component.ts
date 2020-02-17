import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Hyperlink} from '../../shared/hyperlink.model';
import {HyperlinkService} from '../../shared/hyperlink.service';
import {Subscription} from 'rxjs';
import {DashboardComponent} from '../../dashboard.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit, OnDestroy {

  constructor(
    private deleteDialogComponentMatDialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public hyperlink: Hyperlink,
    private hyperlinkService: HyperlinkService,
  ) { }

  private subscription: Subscription;

  ngOnInit(): void {
  }

  public delete() {
    this.subscription = this.hyperlinkService.delete(this.hyperlink).subscribe();
    this.deleteDialogComponentMatDialogRef.close();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    window.location.reload();
  }

}
