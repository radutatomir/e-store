import {Component, OnInit} from "@angular/core";
import {Category} from "../category";
import {NgForm} from "@angular/forms";
import {CategoryService} from "../category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  category: Category = new Category();

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.categoryService.saveCategory(this.category).subscribe(res => {
        this.router.navigate(['/categories']);
      });
  }

}
