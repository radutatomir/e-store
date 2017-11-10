package ro.tatomir.ase.controller;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import ro.tatomir.ase.model.StoreEntityModel;
import ro.tatomir.ase.utils.NullAwareBeanUtils;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Created by Radu.Tatomir on 11/9/2017.
 */
public class EntityController<T extends StoreEntityModel> {

    private final JpaRepository<T, Long> repository;

    public EntityController(JpaRepository<T, Long> repository) {
        this.repository = repository;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<T>> getAll() {
        return ResponseEntity.ok(repository.findAll());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public T getEntity(@PathVariable("id") Long id) {
        return repository.findOne(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public T createEntity(@RequestBody T entity) {
        entity.setCreatedAt(LocalDateTime.now());
        return repository.saveAndFlush(entity);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PATCH)
    public ResponseEntity<T> updateEntity(@PathVariable("id") Long id,
                                          @RequestBody T updates) {
        if (!repository.exists(id)) {
            return ResponseEntity.notFound().build();
        }
        T old = repository.findOne(id);
        NullAwareBeanUtils.copyNonNullProperties(updates, old);
        old.setUpdatedAt(LocalDateTime.now());
        T updated = repository.saveAndFlush(old);
        return ResponseEntity.ok(updated);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteEntity(@PathVariable("id") Long id) {
        repository.delete(id);
        return ResponseEntity.noContent().build();
    }

}
