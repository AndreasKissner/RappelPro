import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { BtnDeleteEditComponent } from './btn-delete-edit/btn-delete-edit.component';
import { collection, Firestore, orderBy, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { RappelObj } from '../../service/allServices';
import { CollectionReference } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { collectionData } from '@angular/fire/firestore';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-rappel-list',
  imports: [MatButtonModule, MatIconModule, BtnDeleteEditComponent,CommonModule, MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule],
  templateUrl: './rappel-list.component.html',
  styleUrl: './rappel-list.component.scss',
})
export class RappelListComponent implements OnInit {
  private firestore = inject(Firestore);
  private rappelRef = collection(this.firestore, 'rappel') as CollectionReference<RappelObj>;

  rappel$!: Observable<RappelObj[]>;

ngOnInit(): void {
  // Diese Funktion wird automatisch aufgerufen,
  // wenn die Komponente gestartet wird

  const rappelQuery = query(
    // Wir bauen hier eine Firestore-Abfrage (noch keine Daten!)
    this.rappelRef,
    // Das ist die Collection "rappel"
    // (= wo die Daten liegen)
    orderBy('createdAt', 'desc')
    // Sortiere nach dem Feld "createdAt"
    // 'desc' bedeutet: neuester Eintrag zuerst
  );
  this.rappel$ = collectionData(rappelQuery, { idField: 'docId' });
  // Hier wird die Abfrage ausgeführt
  // Die Daten kommen als Liste (Observable)
  // Jede Rappel bekommt zusätzlich die Firestore-ID im Feld "docId"
}


// Alte version
 /* ngOnInit(): void {
    this.rappel$ = collectionData(this.rappelRef, {idField : 'docId'});
  } */


getReminderLabel(minutes: number | string | null | undefined): string {
  const value = Number(minutes);
  if (isNaN(value)) {
    return '—';
  }
  if (value === 0) return 'À l’heure du rendez-vous';
  if (value === 10) return '10 minutes avant';
  if (value === 30) return '30 minutes avant';
  if (value === 60) return '1 heure avant';
  if (value === 1440) return '1 jour avant';
  return '';
}

}
