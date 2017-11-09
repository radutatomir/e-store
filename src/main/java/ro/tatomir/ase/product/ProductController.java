package ro.tatomir.ase.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ro.tatomir.ase.controller.EntityController;

/**
 * Created by Radu.Tatomir on 11/9/2017.
 */
@RestController
@RequestMapping("api/products")
public class ProductController extends EntityController<Product> {

    @Autowired
    public ProductController(ProductRepository productRepository) {
        super(productRepository);
    }


}
