import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonFooter, IonToolbar, IonButtons, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-menu-hijos',
  templateUrl: './menu-hijos.component.html',
  styleUrls: ['./menu-hijos.component.scss'],
  standalone: true,
  imports: [IonFooter, IonToolbar, IonButtons, IonButton, RouterLink],
})
export class MenuHijosComponent {
  @Input() base = '';
}