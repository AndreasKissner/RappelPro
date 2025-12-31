import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NoteDialogComponent } from '../../dialogs/dialogNote/note-dialog/note-dialog.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-button',
  imports: [MatIconModule,MatDialogModule,MatToolbarModule, FormsModule],
  templateUrl: './dialog-button.component.html',
  styleUrl: './dialog-button.component.scss',
})
export class DialogButtonComponent {
  private readonly dialog = inject(MatDialog)
  

  openDialog(): void {
    const dialogAddRappelRef = this.dialog.open(NoteDialogComponent);
       dialogAddRappelRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Note wurde gespeichert:', result);
      } else {
        console.log('Dialog wurde ohne Speichern abgebrochen');
      }
    });
    console.log("Btn wurde geclickt");
  }
  
}
