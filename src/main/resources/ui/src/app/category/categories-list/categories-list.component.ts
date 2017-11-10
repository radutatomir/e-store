import {Component, OnInit} from "@angular/core";
import {DataSource} from "@angular/cdk/collections";
import {Category} from "../category";
import { Observable } from 'rxjs/Observable'
import {CategoryService} from "../category.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  dataSubject: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);

  displayedColumns = ['id', 'name', 'description', 'productsCount', 'edit', 'delete'];
  dataSource = new CategoryDataSource(this.dataSubject);

  categories: Category[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(res => this.dataSubject.next(res));
  }

  deleteCategory(category: Category) {
    this.categoryService.deleteCategory(category).subscribe(() => this.ngOnInit())
  }

}

export class CategoryDataSource extends DataSource<Category> {

  constructor(private dataSubject: BehaviorSubject<Category[]>) {
    super();
  }

  connect(): Observable<Category[]> {
    return this.dataSubject.asObservable();

  }

  disconnect(): void {
  }
}
