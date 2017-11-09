import {Component, OnInit} from "@angular/core";
import {Product} from "../product";
import {CategoryService} from "../../category/category.service";
import {Category} from "../../category/category";
import {NgForm} from "@angular/forms";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();
  categories: Category[];

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
    });
  }

  onSubmit(form: NgForm) {
    this.productService.saveProduct(this.product).subscribe(() => {
      this.router.navigate(['/products']);
    })
  }

}
