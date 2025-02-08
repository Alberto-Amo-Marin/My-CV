import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule
  ]
})
export class AppComponent {
  name: string = 'Your Name';
  title: string = 'Desarrollador Web';
  about: string = 'Descripción breve sobre ti';

  experience: { company: string, role: string, period: string }[] = [
    { company: 'Empresa 1', role: 'Puesto', period: '2020 - Presente' },
    { company: 'Empresa 2', role: 'Puesto', period: '2018 - 2020' }
  ];

  education: { school: string, degree: string, year: string }[] = [
    { school: 'Universidad XYZ', degree: 'Licenciatura en Computación', year: '2015 - 2019' }
  ];

  skills: string[] = ['Angular', 'TypeScript', 'JavaScript', 'CSS', 'HTML'];

  projects: string[] = ['Proyecto 1', 'Proyecto 2', 'Proyecto 3'];

  constructor() { }




}
