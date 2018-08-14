import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from '../../tools/components/layout/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule
  ],
  declarations: [HeaderComponent],
  exports: [
    MatToolbarModule,
    FlexLayoutModule,
    HeaderComponent
  ],

})
export class ComponentsModule { }
