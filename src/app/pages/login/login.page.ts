import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular';

import { MenuPrincipalComponent } from '../../components/menu-principal/menu-principal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, MenuPrincipalComponent],
})
export class LoginPage {}