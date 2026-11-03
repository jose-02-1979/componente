import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-noticias-tres',
  templateUrl: './noticias-tres.page.html',
  styleUrls: ['./noticias-tres.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class NoticiasTresPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
