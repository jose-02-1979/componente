import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonContent } from '@ionic/angular';

import { MenuHijosComponent } from '../../components/menu-hijos/menu-hijos.component';
import { MenuPrincipalComponent } from '../../components/menu-principal/menu-principal.component';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
  standalone: true,
  imports: [IonContent, RouterOutlet, MenuPrincipalComponent, MenuHijosComponent],
})
export class NoticiasPage {}