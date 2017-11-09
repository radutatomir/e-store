import {Component, OnInit} from "@angular/core";
import {ProductService} from "../product.service";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {Product} from "../product";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  dataSubject = new BehaviorSubject<Product[]>([]);

  displayedColumns = ['id', 'name', 'category', 'edit', 'delete'];
  dataSource = new ProductDataSource(this.dataSubject);

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      this.dataSubject.next(res);
    })
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product).subscribe(() => {
      this.ngOnInit();
    });
  }

}

export class ProductDataSource extends DataSource<Product> {

  constructor(private dataSubject: BehaviorSubject<Product[]>) {
    super();
  }

  connect(): Observable<Product[]> {
    return this.dataSubject.asObservable();
  }

  disconnect(): void {
  }
}

