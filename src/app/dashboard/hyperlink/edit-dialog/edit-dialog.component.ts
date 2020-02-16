import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  constructor(private editDialogComponentMatDialogRef: MatDialogRef<EditDialogComponent>) { }

  public data;

  public onNoClick;

  ngOnInit(): void {
  }

}
