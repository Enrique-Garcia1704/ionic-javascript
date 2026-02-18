import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-acciones',
  templateUrl: './acciones.page.html',
  styleUrls: ['./acciones.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class AccionesPage {}
