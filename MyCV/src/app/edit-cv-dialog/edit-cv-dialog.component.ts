import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-edit-cv-dialog',
  templateUrl: './edit-cv-dialog.component.html',
  styleUrls: ['./edit-cv-dialog.component.scss'],
  standalone: true,
  imports: [MaterialModule]
})
export class EditCvDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditCvDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.data);
  }
}
