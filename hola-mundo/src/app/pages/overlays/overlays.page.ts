import { Component } from '@angular/core';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-overlays',
  templateUrl: './overlays.page.html',
  styleUrls: ['./overlays.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class OverlaysPage {
  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController) {}

  async abrirAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Hola 👋',
      message: 'Esto es un ion-alert',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async abrirToast() {
    const toast = await this.toastCtrl.create({
      message: 'Esto es un ion-toast',
      duration: 1500,
    });
    await toast.present();
  }
}
