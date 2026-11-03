import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular';

import { MenuPrincipalComponent } from '../../components/menu-principal/menu-principal.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, MenuPrincipalComponent],
})
export class InicioPage {}