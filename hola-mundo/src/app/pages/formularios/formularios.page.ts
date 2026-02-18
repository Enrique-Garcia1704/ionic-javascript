import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-formularios',
  templateUrl: './formularios.page.html',
  styleUrls: ['./formularios.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class FormulariosPage {
  nombre = 'Enrique';
  acepta = false;
}
