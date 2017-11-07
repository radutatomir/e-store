package ro.tatomir.ase.category;

import org.springframework.data.rest.core.config.Projection;

/**
 * Created by Radu.Tatomir on 11/7/2017.
 */
@Projection(types = Category.class)
public interface CategoryProjection {
    Long getId();
    String getName();
}
