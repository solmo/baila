import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  imports: [
    CommonModule,
    ],
  declarations: [],
  exports: [
    TableModule,
    ButtonModule,
    ToolbarModule,
    CardModule,
    PanelModule,
    InputTextModule,
    DialogModule,
    MultiSelectModule,
    ListboxModule
  ]
})
export class MyprimengModule { }
