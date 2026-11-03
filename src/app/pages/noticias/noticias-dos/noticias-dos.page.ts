import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-noticias-dos',
  templateUrl: './noticias-dos.page.html',
  styleUrls: ['./noticias-dos.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class NoticiasDosPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
