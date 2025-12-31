import { Component } from '@angular/core';

import { RappelListComponent } from './rappel-list/rappel-list.component';

@Component({
  selector: 'app-main-content',
  
  imports: [RappelListComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {

}
