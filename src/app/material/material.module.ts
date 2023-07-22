import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatDialogModule
  ],
  exports: [
    MatListModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
