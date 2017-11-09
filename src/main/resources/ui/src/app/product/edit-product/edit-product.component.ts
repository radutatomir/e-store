import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../product.service";
import {CategoryService} from "../../category/category.service";
import {Product} from "../product";
import {Category} from "../../category/category";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product : Product;
  categories : Category[];

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router,
              private categoryService: CategoryService) {
  }

  async ngOnInit() {
    let productId = this.route.snapshot.params.id;
    this.categories = await this.categoryService.getCategories().toPromise();
    this.product = await this.productService.getProduct(productId).toPromise();
  }

  onSubmit(form: NgForm) {
    this.productService.updateProduct(this.product).subscribe(() => this.router.navigate(['/products']));
  }

}
