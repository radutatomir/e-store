import {Component, OnInit} from "@angular/core";
import {DataSource} from "@angular/cdk/collections";
import {Category} from "../category";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {CategoryService} from "../category.service";
import 'rxjs/Rx';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  displayedColumns = ['id', 'name', 'edit'];
  dataSource = new CategoryDataSource(this.categoryService);

  categories : Category[];

  constructor(private categoryService : CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res['_embedded'];
    });
  }

}

const data : Category[] = [{
  id : 1,
  name : 'Laptop'
}];

export class CategoryDataSource extends DataSource<Category> {

  constructor(private categoryService : CategoryService) {
    super();
  }

  connect(): Observable<Category[]> {
    return this.categoryService.getCategories().map(res => res['_embedded']['categories']);
  }

  disconnect(): void { }
}
