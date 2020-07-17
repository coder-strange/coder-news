// Modules
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

// MaterialModules
const MatModules = [
    MatIconModule, MatButtonModule, MatToolbarModule,
    MatDialogModule, MatSnackBarModule, MatMenuModule,
    MatExpansionModule, MatListModule, MatFormFieldModule,
    MatInputModule, MatSelectModule, MatCheckboxModule,
    MatRadioModule, MatDatepickerModule, MatNativeDateModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule,
    MatRippleModule, MatSlideToggleModule, MatBadgeModule, MatProgressSpinnerModule
];

@NgModule({
    imports: [...MatModules],
    exports: [...MatModules]
})

export class MaterialModule {}
