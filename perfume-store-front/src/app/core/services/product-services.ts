import { Injectable } from '@angular/core';
import { MOCK_PRODUCTS, MOCK_CATEGORIES, MOCK_ScentFamily, MOCK_Occasions } from '../../../../public/data/data';
import { ScentFamily, Occasion } from '../models/product.model';

export type ProductSortOption = 'price_asc' | 'price_desc';

export interface ProductFilterCriteria {
  categories?: string[];
  scentFamilies?: ScentFamily[];
  occasions?: Occasion[];
  minPrice?: number;
  maxPrice?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(filters: ProductFilterCriteria = {}, sortOption: ProductSortOption = 'price_asc') {
    let result = [...MOCK_PRODUCTS];
    if (filters.categories?.length) {
      const wanted = filters.categories.map((c) => c.toLowerCase());
      result = result.filter((p) => wanted.includes(p.category.name.toLowerCase()));
    }

    if (filters.scentFamilies?.length) {
      const wanted = filters.scentFamilies.map((s) => s.toLowerCase());
      result = result.filter((p) => p.scentFamily.some((sf) => wanted.includes(sf.toLowerCase())));
    }

    if (filters.occasions?.length) {
      const wanted = filters.occasions.map((o) => o.toLowerCase());
      result = result.filter((p) =>
        p.occasions.some((occ) => {
          const occLower = occ.toLowerCase();
          return (
            wanted.includes(occLower) ||
            (occLower === 'gift' && wanted.includes('gift sets')) ||
            (occLower === 'gift sets' && wanted.includes('gift'))
          );
        })
      );
    }

    if (filters.minPrice !== undefined) {
      result = result.filter((p) => p.variants[0].price >= filters.minPrice!);
    }

    if (filters.maxPrice !== undefined) {
      result = result.filter((p) => p.variants[0].price <= filters.maxPrice!);
    }

    result.sort((a, b) =>
      sortOption === 'price_asc'
        ? a.variants[0].price - b.variants[0].price
        : b.variants[0].price - a.variants[0].price
    );

    return result;
  }


  getProductById(id: number | string) {
    const product = MOCK_PRODUCTS.find((p) => String(p.id) === String(id));
    return product;
  }

  getCategories() {
    return MOCK_CATEGORIES;
  }


  getScentFamilies() {
    return MOCK_ScentFamily;
  }

  getOccasions() {
    return MOCK_Occasions;
  }

}