import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { DatenschutzComponent } from './pages/datenschutz/datenschutz.component';

export const routes: Routes = [
    {
        "path" : '' , component : MainContentComponent
    },
    {
        "path" :"impressum", component: ImpressumComponent
    },
    {
        "path" :"datenschutz", component: DatenschutzComponent
    }
    
];
