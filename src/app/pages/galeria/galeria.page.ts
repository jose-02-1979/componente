import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonContent } from '@ionic/angular';

import { MenuHijosComponent } from '../../components/menu-hijos/menu-hijos.component';
import { MenuPrincipalComponent } from '../../components/menu-principal/menu-principal.component';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
  standalone: true,
  imports: [IonContent, RouterOutlet, MenuPrincipalComponent, MenuHijosComponent],
})
export class GaleriaPage {}