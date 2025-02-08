import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatDividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name = 'Tu Nombre';
  title = 'Desarrollador Web';
  about = 'Descripción breve sobre ti';
  experience = [
    { company: 'Empresa 1', role: 'Puesto', period: '2020 - Presente' },
    { company: 'Empresa 2', role: 'Puesto', period: '2018 - 2020' }
  ];
  education = [
    { school: 'Universidad XYZ', degree: 'Licenciatura en Computación', year: '2015 - 2019' }
  ];
  skills = ['Angular', 'TypeScript', 'JavaScript', 'CSS', 'HTML'];
  projects = ['Proyecto 1', 'Proyecto 2', 'Proyecto 3'];
}
