import { 
  ApplicationConfig, 
  provideBrowserGlobalErrorListeners, 
  provideZonelessChangeDetection, 
  LOCALE_ID, 
  importProvidersFrom // Hinzugefügt für stabilere Modul-Einbindung
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { provideNativeDateAdapter } from '@angular/material/core';
// Wir nutzen das Modul direkt, falls der "provideNativeMatTimeAdapter" zickt
import { MatTimepickerModule } from '@angular/material/timepicker'; 
import { firebaseConfig } from './configFirebase/firebase-config';

// Wichtig für europäische Formate:
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de'; 

registerLocaleData(localeDe);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    
    // Adapter für Datum
    provideNativeDateAdapter(),
    
    // Sicherer Weg für den Timepicker in deiner Version:
    importProvidersFrom(MatTimepickerModule), 

    // Hier setzen wir die Sprache global auf Deutsch
    // Das sorgt für 24h-Format (kein AM/PM) und dd.MM.yyyy
    { provide: LOCALE_ID, useValue: 'de-DE' }
  ]
};