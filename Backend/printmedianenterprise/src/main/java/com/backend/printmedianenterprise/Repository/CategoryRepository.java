package com.backend.printmedianenterprise.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.printmedianenterprise.Entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long>{

}
