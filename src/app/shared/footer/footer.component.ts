import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule,  } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, MatIconModule, MatIconButton, MatTooltipModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {

}
