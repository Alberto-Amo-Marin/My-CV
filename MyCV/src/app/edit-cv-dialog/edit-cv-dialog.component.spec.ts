import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCvDialogComponent } from './edit-cv-dialog.component';

describe('EditCvDialogComponent', () => {
  let component: EditCvDialogComponent;
  let fixture: ComponentFixture<EditCvDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCvDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCvDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
