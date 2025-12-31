
import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NoteDialogComponent } from '../../../dialogs/dialogNote/note-dialog/note-dialog.component';
import { deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { RappelObj } from '../../../service/allServices';

@Component({
  selector: 'app-btn-delete-edit',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './btn-delete-edit.component.html',
  styleUrl: './btn-delete-edit.component.scss',
})
export class BtnDeleteEditComponent {

  // 2. Das Empfangsfach definieren. 
  // Das Ausrufezeichen ! heißt: "Keine Sorge, das Paket kommt gleich."
  @Input() rappel!: RappelObj;


  private firestore = inject(Firestore)
  private dialog = inject(MatDialog);


openEditDialog(){
  this.dialog.open(NoteDialogComponent,{
    // Wir nutzen jetzt 'this.rappel', das wir per @Input bekommen haben
    data: this.rappel
  });
}
  async deleteRappel() {
    // Hier auch 'this.rappel', das wir per @Input bekommen haben
    const id = this.rappel.docId
    // 1. Sicherheitscheck (ID vorhanden?) & Bestätigung vom User
    if (id && window.confirm('Möchtest du diese Notiz wirklich löschen?')) {
      try {
        // 2. Das Löschen ausführen
        await deleteDoc(doc(this.firestore, 'rappel', id));
        console.log('Gelöscht!');
      } catch (error) {
        // 3. Fehler abfangen (z.B. keine Internetverbindung)
        console.error('Fehler beim Löschen:', error);
        alert('Hoppla, da ist was schiefgelaufen!');
      }
    }
  }
}
