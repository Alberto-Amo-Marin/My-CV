import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-edit-cv-dialog',
  templateUrl: './edit-cv-dialog.component.html',
  styleUrls: ['./edit-cv-dialog.component.scss'],
  standalone: true,
  imports: [
    MaterialModule
  ]
})
export class EditCvDialogComponent {

  name: string = '';
  title: string = '';
  about: string = '';
  experience: { company: string, role: string, period: string }[] = [];
  education: { school: string, degree: string, year: string }[] = [];
  skills: string[] = [];
  projects: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<EditCvDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Asignar los datos del diálogo
    if (data) {
      this.name = data.name;
      this.title = data.title;
      this.about = data.about;
      this.experience = data.experience;  // Ahora es un array, no necesitamos dividir
      this.education = data.education;    // Ahora es un array, no necesitamos dividir
      this.skills = data.skills.split(', ');  // Se mantiene como antes porque es una cadena
      this.projects = data.projects.split(', '); // Se mantiene como antes porque es una cadena
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    const result = {
      name: this.name,
      title: this.title,
      about: this.about,
      experience: this.experience,  // Mantén la estructura de array
      education: this.education,    // Mantén la estructura de array
      skills: this.skills,
      projects: this.projects,
    };
    this.dialogRef.close(result);
  }
}
