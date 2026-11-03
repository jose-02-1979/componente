import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-galeria-uno',
  templateUrl: './galeria-uno.page.html',
  styleUrls: ['./galeria-uno.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class GaleriaUnoPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
