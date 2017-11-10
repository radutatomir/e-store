import {Category} from "../category/category";
import {Product} from "../product/product";
export class Catalog extends Category {

  products : Product[];

  constructor(category : Category) {
    super();
    this.id = category.id;
    this.name = category.name;
  }
}
