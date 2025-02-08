import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditCvDialogComponent } from './edit-cv-dialog/edit-cv-dialog.component';
import { MaterialModule } from './material.module'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    MaterialModule, // Importamos el MaterialModule
    EditCvDialogComponent,
    CommonModule
  ]
})
export class AppComponent {
  name: string = 'Tu Nombre';
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

  constructor(private dialog: MatDialog) { }

  openEditCvDialog(): void {
    const dialogRef = this.dialog.open(EditCvDialogComponent, {
      width: '500px',
      data: {
        name: this.name,
        title: this.title,
        about: this.about,
        experience: this.experience,  // No convertir a cadena, pasar el array directamente
        education: this.education,    // No convertir a cadena, pasar el array directamente
        skills: this.skills.join(', '),
        projects: this.projects.join(', ')
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.name = result.name;
        this.title = result.title;
        this.about = result.about;
        this.experience = result.experience;  // Asignar directamente como array
        this.education = result.education;    // Asignar directamente como array
        this.skills = result.skills.split(', ').map((skill: string) => skill.trim());
        this.projects = result.projects.split(', ').map((project: string) => project.trim());
      }
    });
  }
}
