import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule} from "@angular/material";
import { CategoryService } from './category.service';
import {HttpClientModule} from "@angular/common/http";
import { AddCategoryComponent } from './add-category/add-category.component';
import {RouterModule} from "@angular/router";
import {FormsModule, NgModel} from "@angular/forms";
import { EditCategoryComponent } from './edit-category/edit-category.component';

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
    MatIconModule
  ],
  declarations: [CategoriesListComponent, AddCategoryComponent, EditCategoryComponent],
  exports: [CategoriesListComponent, AddCategoryComponent],
  providers: [CategoryService]
})
export class CategoryModule { }
