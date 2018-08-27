import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from '../../tools/components/layout/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatSidenavModule, MatButtonModule, MatChipsModule,
         MatIconModule, MatListModule, MatSnackBarModule, MatCardModule,
         MatFormFieldModule, MatInputModule, MatTableModule, MatTabsModule,
         MatRadioModule, MatDatepickerModule, MatNativeDateModule,
         MatSelectModule, MatMenuModule } from '@angular/material';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatChipsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatMenuModule
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [
    FlexLayoutModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    MatChipsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatMenuModule
  ],

})
export class ComponentsModule { }
