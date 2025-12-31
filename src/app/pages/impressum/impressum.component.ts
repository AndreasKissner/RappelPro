import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ButtonBackComponent } from './button-back/button-back.component';

@Component({
  selector: 'app-impressum',
  imports: [MatIconModule,RouterModule, ButtonBackComponent],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss',
})
export class ImpressumComponent {

}
