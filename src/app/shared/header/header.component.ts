import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogButtonComponent } from '../../main-content/dialog-button/dialog-button.component';

;


@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatTooltipModule, DialogButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

}
