package ro.tatomir.ase.category;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SelectBeforeUpdate;
import ro.tatomir.ase.model.StoreEntityModel;
import ro.tatomir.ase.product.Product;

import javax.persistence.*;
import java.util.List;
import java.util.Optional;

/**
 * Created by Radu.Tatomir on 11/7/2017.
 */
@Entity
@Table(name = "category")
@DynamicUpdate
@SelectBeforeUpdate
public class Category extends StoreEntityModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String name;
    @Column
    private String description;
    @JsonIgnore
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private List<Product> products;

    public Category() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public Integer getProductsCount() {
        return Optional.ofNullable(this.products).map(List::size).orElse(0);
    }
}
