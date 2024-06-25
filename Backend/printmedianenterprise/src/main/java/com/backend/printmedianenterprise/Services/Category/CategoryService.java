package com.backend.printmedianenterprise.Services.Category;

import com.backend.printmedianenterprise.Dto.CategoryDto;
import com.backend.printmedianenterprise.Entity.Category;

public interface CategoryService {

	Category createCategory(CategoryDto categoryDto);
}
