import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { RappelObj } from '../../../service/allServices';
import { addDoc, collection, doc, Firestore, serverTimestamp, updateDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


const DEFAULT_RAPPEL: RappelObj = {
  docId: '',
  title: '',
  date: '',
  time: '',
  reminderBefore: 0,
  priority: 'low',
  note: '',
  owner : 'andreas'
}

@Component({
  selector: 'app-note-dialog',
  imports: [MatDialogContent, MatFormFieldModule, MatOptionModule, MatSelectModule, MatRadioModule, MatDialogActions, MatInputModule, MatButtonModule, MatDialogClose, CommonModule, FormsModule],
  templateUrl: './note-dialog.component.html',
  styleUrl: './note-dialog.component.scss',
})
export class NoteDialogComponent {
  //Dialog hier Injecten das er da Ist
  private dialogRef = inject(MatDialogRef<NoteDialogComponent>);
  //Firestore holen
  private firestore = inject(Firestore);
  // sagen wohin gespeichert wird
  private rappelRef = collection(this.firestore, 'rappel');
  //Edit Dialog
  private dialogData = inject(MAT_DIALOG_DATA);

  //Kopie DEFAULT_RAPPEL
  rappelForm: RappelObj = { ...DEFAULT_RAPPEL };

  ngOnInit() {
    if (this.dialogData) {
      this.rappelForm = { ...this.dialogData }
    }
  }


async saveRappel() {
  try {
    if (this.rappelForm.docId) {
      const { docId, ...rappelData } = this.rappelForm;
      const rappelDoc = doc(this.firestore, 'rappel', docId);
      await updateDoc(rappelDoc, rappelData);
      alert("Rappel Actualisie");
    } else {
      const { docId, ...rappelData } = this.rappelForm;
      await addDoc(this.rappelRef, {
        ...rappelData,
        createdAt: serverTimestamp()
      });
      alert("Rappel soufgarde");
    }

    this.dialogRef.close(true);
  } catch (error) {
    alert("Error aves soufgarde");
  }
}

/*   async saveRappel() {
    try {
      if (this.rappelForm.docId) {
        const rappelDoc = doc(this.firestore, 'rappel', this.rappelForm.docId);
        await updateDoc(rappelDoc, { ...this.rappelForm });
        alert("Rappel Actualisie")
      } else {
        await addDoc(this.rappelRef, this.rappelForm);
        alert("Rappel soufgarde")
      } this.dialogRef.close(true);
    } catch (error) {
      alert("Error aves soufgarde")
    }
  } */


}
