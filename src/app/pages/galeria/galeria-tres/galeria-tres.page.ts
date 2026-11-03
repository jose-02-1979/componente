import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-galeria-tres',
  templateUrl: './galeria-tres.page.html',
  styleUrls: ['./galeria-tres.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class GaleriaTresPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
