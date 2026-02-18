import { Component } from '@angular/core';
import {
  IonicModule,
  AlertController,
  ToastController,
  ModalController,
  LoadingController,
} from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-comunes',
  templateUrl: './comunes.page.html',
  styleUrls: ['./comunes.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ComunesPage {
  nombre = 'Enrique';
  items = ['Notificación 1', 'Notificación 2', 'Notificación 3'];

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController
  ) {}

  async mostrarAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      message: 'Esto es un ion-alert',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async mostrarToast() {
    const toast = await this.toastCtrl.create({
      message: 'Guardado ✅ (ion-toast)',
      duration: 1500,
    });
    await toast.present();
  }

  async mostrarLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 1200,
    });
    await loading.present();
  }

  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: ModalDemoComponent,
    });
    await modal.present();
  }

  agregarItem() {
    this.items = [...this.items, `Nuevo item ${this.items.length + 1}`];
  }
}

@Component({
  standalone: true,
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Modal</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="cerrar()">Cerrar</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h2>Hola desde un ion-modal 👋</h2>
      <p>Ejemplo de modal.</p>
    </ion-content>
  `,
  imports: [IonicModule, CommonModule],
})
export class ModalDemoComponent {
  constructor(private modalCtrl: ModalController) {}
  cerrar() {
    this.modalCtrl.dismiss();
  }
}
