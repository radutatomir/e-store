import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {CategoryService} from "../../category/category.service";
import {ProductService} from "../../product/product.service";
import {Category} from "../../category/category";
import {Product} from "../../product/product";
import {Catalog} from "../catalog";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CatalogComponent implements OnInit {

  categories : Category[];
  products : Product[];
  catalogs : Catalog[] = [];

  constructor(private categoryService: CategoryService,
              private productService: ProductService) {
  }

  async ngOnInit() {
    this.categories = await this.categoryService.getCategories().toPromise();
    this.products = await this.productService.getProducts().toPromise();
    this.categories.forEach(category => {
      let catalog = new Catalog(category);
      catalog.products = this.products.filter(product => {
        return product.category.id == catalog.id;
      });
      this.catalogs.push(catalog);
    });
  }

}
