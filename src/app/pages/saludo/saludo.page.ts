import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular';

import { MenuPrincipalComponent } from '../../components/menu-principal/menu-principal.component';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.page.html',
  styleUrls: ['./saludo.page.scss'],
  standalone: true,
  imports: [IonContent, MenuPrincipalComponent],
})
export class SaludoPage {}