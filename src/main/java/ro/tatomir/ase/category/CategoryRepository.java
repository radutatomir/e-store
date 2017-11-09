package ro.tatomir.ase.category;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Radu.Tatomir on 11/7/2017.
 */
@Repository
public interface CategoryRepository extends PagingAndSortingRepository<Category, Long>, JpaRepository<Category, Long> {
}
