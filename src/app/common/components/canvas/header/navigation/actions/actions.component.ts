import { Component, OnInit } from '@angular/core';
import { NotificationsDialogComponent } from './notifications-dialog/notifications-dialog.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

    openLoginDialog() {
    this.dialog.open(LoginDialogComponent);
  }

  openNotificationsDialog() {
    this.dialog.open(NotificationsDialogComponent);
  }

  ngOnInit() {
  }

}
