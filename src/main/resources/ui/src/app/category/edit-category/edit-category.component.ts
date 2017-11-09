import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../category.service";
import {Category} from "../category";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  category: Category;

  constructor(private route: ActivatedRoute,
              private categoryService: CategoryService,
              private router : Router) {
  }

  async ngOnInit() {
    let categoryId = this.route.snapshot.params.id;
    this.category = await this.categoryService.getCategory(categoryId).toPromise();
  }

  onSubmit(form: NgForm) {
    this.categoryService.updateCategory(this.category).subscribe(() => this.router.navigate(['/categories']));
  }

}
