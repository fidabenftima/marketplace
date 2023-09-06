import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/_models/Category/Category';
import { AdCategory } from 'src/app/core/_models/Category/adCategory';

const routes = {
  category: () => `/category`,
  categoryWithId: (id: string) => `/category/${id}`,
  adCategory: () => `/adCategory`,
  adCategoryWithId: (id: string) => `/adCategory/${id}`
};
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  route = '/marketcategoryservice';
  constructor(private api: ApiService) {}

  getAllCategorys(): Observable<Category[]> {
    return this.api.get<Category[]>(this.route + routes.category(), Category);
  }
  getCategory(id: string): Observable<Category> {
    return this.api.get<Category>(
      this.route + routes.categoryWithId(id),
      Category
    );
  }
  addCategory(category: Category): Observable<Category> {
    return this.api.post<Category>(
      this.route + routes.category(),
      category,
      Category
    );
  }
  updateCategory(category: Category): Observable<Category> {
    return this.api.put<Category>(
      this.route + routes.categoryWithId(category._id),
      category,
      Category
    );
  }
  deleteCategory(id: string): Observable<Category> {
    return this.api.delete<Category>(
      this.route + routes.categoryWithId(id),
      Category
    );
  }

  /* Ad Category */
  getAllAdCategories(): Observable<AdCategory[]> {
    return this.api.get<AdCategory[]>(
      this.route + routes.adCategory(),
      AdCategory
    );
  }
  getAdCategory(id: string): Observable<AdCategory> {
    return this.api.get<AdCategory>(
      this.route + routes.adCategoryWithId(id),
      AdCategory
    );
  }
  addAdCategory(category: AdCategory): Observable<AdCategory> {
    return this.api.post<AdCategory>(
      this.route + routes.adCategory(),
      category,
      AdCategory
    );
  }
  updateAdCategory(category: AdCategory): Observable<AdCategory> {
    return this.api.put<AdCategory>(
      this.route + routes.adCategoryWithId(category._id),
      category,
      AdCategory
    );
  }
  deleteAdCategory(id: string): Observable<AdCategory> {
    return this.api.delete<AdCategory>(
      this.route + routes.adCategoryWithId(id),
      AdCategory
    );
  }
}
