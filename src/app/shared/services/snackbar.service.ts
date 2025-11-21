import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { MessageType } from '../models/snackbar.model';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private snackBar = inject(MatSnackBar);

  show(messageType: MessageType, message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: { messageType, message },
      duration: 3000,
      panelClass: ['coskun-snackbar-panel'],
    });
  }

  success(message: string) {
    this.show('success', message);
  }

  info(message: string) {
    this.show('info', message);
  }

  error(message: string) {
    this.show('error', message);
  }
}