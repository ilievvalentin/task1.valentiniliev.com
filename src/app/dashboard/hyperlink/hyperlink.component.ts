import {Component, Input, OnInit} from '@angular/core';
import {Hyperlink} from '../shared/hyperlink.model';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {EditDialogComponent} from './edit-dialog/edit-dialog.component';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-hyperlink',
  templateUrl: './hyperlink.component.html',
  styleUrls: ['./hyperlink.component.css']
})
export class HyperlinkComponent implements OnInit {

  constructor(public router: Router, private matDialog: MatDialog) {
  }

  @Input() public hyperlink: Hyperlink;

  public imgSrc;

  ngOnInit(): void {
    this.imgSrc = new URL(this.hyperlink.link);
    this.imgSrc = this.imgSrc.origin + '/favicon.ico';
  }

  public openEditDialog() {
    const editDialogComponentMatDialogRef = this.matDialog.open(EditDialogComponent, {data: this.hyperlink});
  }

  public openDeleteDialog() {
    const deleteDialogComponentMatDialogRef = this.matDialog.open(DeleteDialogComponent, {data: this.hyperlink});
  }

  public href(link) {
    window.location.replace(link);
  }

}
