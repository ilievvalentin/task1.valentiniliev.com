import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Hyperlink} from '../../shared/hyperlink.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HyperlinkService} from '../../shared/hyperlink.service';
import {Subscribable, Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit, OnDestroy {

  constructor(
    private editDialogComponentMatDialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public hyperlink: Hyperlink,
    private hyperlinkService: HyperlinkService
  ) { }

  private subscribable: Subscription;

  public formGroup = new FormGroup({
    // tslint:disable-next-line:max-line-length
    link: new FormControl(this.hyperlink.link, [Validators.pattern(new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/))]),
    title: new FormControl(this.hyperlink.title, []),
    color: new FormControl(this.hyperlink.color, []),
  });

  ngOnInit(): void {
  }

  public submit() {
    this.hyperlink.link = this.formGroup.getRawValue().link;
    this.hyperlink.title = this.formGroup.getRawValue().title;
    this.hyperlink.color = this.formGroup.getRawValue().color;
    this.subscribable = this.hyperlinkService.edit(this.hyperlink).subscribe();
    this.editDialogComponentMatDialogRef.close();
  }

  ngOnDestroy(): void {
    this.subscribable.unsubscribe();
  }

}
