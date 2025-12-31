import { Component } from '@angular/core';

import { RappelListComponent } from './rappel-list/rappel-list.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main-content',
  
  imports: [RappelListComponent, MatIconModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {

}
