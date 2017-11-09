import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Category} from "./category";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get('api/categories');
  }

  public saveCategory(category : Category) : Observable<Category> {
    return this.http.post('api/categories', category);
  }

  public getCategory(id : number) : Observable<Category> {
    return this.http.get(`api/categories/${id}`);
  }

  public updateCategory(category : Category) : Observable<Category> {
    return this.http.patch(`api/categories/${category.id}`, category);
  }
}
