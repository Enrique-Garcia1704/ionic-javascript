import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-visual',
  templateUrl: './visual.page.html',
  styleUrls: ['./visual.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class VisualPage {}
