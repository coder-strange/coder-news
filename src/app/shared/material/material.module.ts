// Modules
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider';

// MaterialModules
const MatModules = [
    MatIconModule, MatButtonModule, MatToolbarModule,
    MatDialogModule, MatSnackBarModule,
    MatExpansionModule, MatFormFieldModule,
    MatInputModule,
    MatTableModule, MatPaginatorModule, MatSortModule,
    MatRippleModule, MatProgressSpinnerModule,
    MatDividerModule, MatCardModule
];

@NgModule({
    imports: [...MatModules],
    exports: [...MatModules]
})

export class MaterialModule {}
