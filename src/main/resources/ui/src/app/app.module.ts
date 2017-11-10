import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {NavigationModule} from "./navigation/navigation.module";
import {CategoryModule} from "./category/category.module";
import {RouterModule} from "@angular/router";
import {CategoriesListComponent} from "./category/categories-list/categories-list.component";
import {AddCategoryComponent} from "./category/add-category/add-category.component";
import {EditCategoryComponent} from "./category/edit-category/edit-category.component";
import {ProductModule} from "./product/product.module";
import {ProductsListComponent} from "./product/products-list/products-list.component";
import {AddProductComponent} from "./product/add-product/add-product.component";
import {EditProductComponent} from "./product/edit-product/edit-product.component";
import {environment} from "../environments/environment";
import {APP_BASE_HREF} from "@angular/common";
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CatalogModule} from "./catalog/catalog.module";
import {CatalogComponent} from "./catalog/catalog/catalog.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/catalog',
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
      }, {
        path: 'products',
        component: ProductsListComponent,
        data: {
          state: 'products'
        }
      }, {
        path: 'products/new',
        component: AddProductComponent,
        data: {
          state: 'products.new'
        }
      }, {
        path: 'products/:id',
        component: EditProductComponent,
        data: {
          state: 'products.id'
        }
      }, {
        path: 'catalog',
        component: CatalogComponent,
        data: {
          state: 'catalog'
        }
      }
    ]),
    BrowserModule,
    NavigationModule,
    CategoryModule,
    BrowserAnimationsModule,
    ProductModule,
    CatalogModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: environment.baseHref}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
