import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const ListOfMaterialModulesmaterial = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
]

@NgModule({
  imports: [
    ListOfMaterialModulesmaterial
  ],
  exports: [
    ListOfMaterialModulesmaterial
  ]
})
export class MaterialModule { }
