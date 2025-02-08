import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations'; // Necesario para animaciones de Material
import { AppComponent } from './app/app.component';
import { MatDialogModule } from '@angular/material/dialog'; // Importar MatDialogModule
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'; // Asegúrate de importar MatToolbarModule
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    MatDialogModule, // Importar MatDialogModule
    MatButtonModule,
    MatToolbarModule, // Aquí importamos MatToolbarModule
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatSlideToggleModule
  ]
});
