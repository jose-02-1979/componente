import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular';

import { MenuPrincipalComponent } from '../../components/menu-principal/menu-principal.component';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
  standalone: true,
  imports: [IonContent, MenuPrincipalComponent],
})
export class NotFoundPage {}