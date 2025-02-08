import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-cv-dialog',
  templateUrl: './edit-cv-dialog.component.html',
  styleUrls: ['./edit-cv-dialog.component.scss'],
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule
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

  skillsStr: string = '';
  projectsStr: string = '';

  constructor(
    public dialogRef: MatDialogRef<EditCvDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.name = data.name;
      this.title = data.title;
      this.about = data.about;
      this.experience = data.experience || [];
      this.education = data.education || [];
      this.skills = data.skills ? data.skills.split(', ') : [];
      this.projects = data.projects ? data.projects.split(', ') : [];

      // Convertir las listas en cadenas para proyectos y habilidades
      this.skillsStr = this.skills.join(', ');
      this.projectsStr = this.projects.join(', ');
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
      experience: this.experience,
      education: this.education,
      skills: Array.isArray(this.skillsStr) ? this.skillsStr : this.skillsStr ? this.skillsStr.split(', ').map((skill: string) => skill.trim()) : [],
      projects: Array.isArray(this.projectsStr) ? this.projectsStr : this.projectsStr ? this.projectsStr.split(', ').map((project: string) => project.trim()) : []
    };
  
    this.dialogRef.close(result);
  }
  



  addExperience(): void {
    this.experience.push({ company: '', role: '', period: '' });
  }

  addEducation(): void {
    this.education.push({ school: '', degree: '', year: '' });
  }
}
