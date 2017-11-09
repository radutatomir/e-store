import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {NavigationModule} from "./navigation/navigation.module";
import {CategoryModule} from "./category/category.module";
import {RouterModule} from "@angular/router";
import {CategoriesListComponent} from "./category/categories-list/categories-list.component";
import {AddCategoryComponent} from "./category/add-category/add-category.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {EditCategoryComponent} from "./category/edit-category/edit-category.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/categories',
        pathMatch: 'full'
      }, {
        path: 'categories',
        component: CategoriesListComponent,
        data: {
          state: 'categories'
        }
      }, {
        path: 'categories/new',
        component: AddCategoryComponent,
        data: {
          state: 'categories.new'
        }
      }, {
        path: 'categories/:id',
        component: EditCategoryComponent,
        data: {
          state: 'categories.id'
        }
      }
    ]),
    BrowserModule,
    NavigationModule,
    CategoryModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
