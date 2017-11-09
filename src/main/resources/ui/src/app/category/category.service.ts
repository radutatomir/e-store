import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Category} from "./category";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  public getCategories(): Observable<any> {
    return this.http.get('/store/api/categories');
  }

  public saveCategory(category: Category): Observable<any> {
    return this.http.post('/store/api/categories', category);
  }

  public getCategory(id: number): Observable<any> {
    return this.http.get(`/store/api/categories/${id}`);
  }

  public updateCategory(category: Category): Observable<any> {
    return this.http.patch(`/store/api/categories/${category.id}`, category);
  }

  public deleteCategory(category: Category): Observable<any> {
    return this.http.delete(`/store/api/categories/${category.id}`);
  }
}
