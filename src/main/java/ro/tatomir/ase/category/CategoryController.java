package ro.tatomir.ase.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ro.tatomir.ase.controller.EntityController;

/**
 * Created by Radu.Tatomir on 11/9/2017.
 */
@RestController
@RequestMapping("api/categories")
public class CategoryController extends EntityController<Category> {

    @Autowired
    public CategoryController(CategoryRepository CategoryRepository) {
        super(CategoryRepository);
    }
}
