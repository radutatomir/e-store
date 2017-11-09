import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductService } from './product.service';
import {
  MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule,
  MatTableModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatSelectModule
  ],
  declarations: [ProductsListComponent, AddProductComponent, EditProductComponent],
  providers: [ProductService]
})
export class ProductModule { }
