import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import {MatIconModule, MatListModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [CatalogComponent]
})
export class CatalogModule { }
