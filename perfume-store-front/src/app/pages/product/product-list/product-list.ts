import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService, ProductSortOption, ProductFilterCriteria } from '../../../core/services/product-services';
import { Product, ScentFamily, Occasion } from '../../../core/models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  private productService = inject(ProductService);
  categories = this.productService.getCategories();
  scentFamilies = this.productService.getScentFamilies();
  occasions = this.productService.getOccasions();

  readonly minLimit = 0;
  readonly maxLimit = 1000;

  selectedCategories = signal<string[]>([]);
  selectedScentFamilies = signal<ScentFamily[]>([]);
  selectedOccasions = signal<Occasion[]>([]);
  minPrice = signal<number>(this.minLimit);
  maxPrice = signal<number>(this.maxLimit);

  sortOption = signal<ProductSortOption>('price_desc');
  isSortDropdownOpen = signal<boolean>(false);
  currentPage = signal<number>(1);
  pageSize = signal<number>(6);

  isMobileFilterOpen = signal<boolean>(false);

  activeCriteria = computed<ProductFilterCriteria>(() => ({
    categories: this.selectedCategories(),
    scentFamilies: this.selectedScentFamilies(),
    occasions: this.selectedOccasions(),
    minPrice: this.minPrice() > this.minLimit ? this.minPrice() : undefined,
    maxPrice: this.maxPrice() < this.maxLimit ? this.maxPrice() : undefined,
  }));

  filteredProducts = computed<Product[]>(() => {
    return this.productService.getProducts(this.activeCriteria(), this.sortOption());
  });

  totalCount = computed<number>(() => this.filteredProducts().length);

  totalPages = computed<number>(() => {
    return Math.max(1, Math.ceil(this.totalCount() / this.pageSize()));
  });

  paginatedProducts = computed<Product[]>(() => {
    const start = (this.currentPage() - 1) * this.pageSize();
    return this.filteredProducts().slice(start, start + this.pageSize());
  });

  hasActiveFilters = computed<boolean>(() => {
    return (
      this.selectedCategories().length > 0 ||
      this.selectedScentFamilies().length > 0 ||
      this.selectedOccasions().length > 0 ||
      this.minPrice() > this.minLimit ||
      this.maxPrice() < this.maxLimit
    );
  });

  toggleCategory(name: string): void {
    const current = this.selectedCategories();
    if (current.includes(name)) {
      this.selectedCategories.set(current.filter((c) => c !== name));
    } else {
      this.selectedCategories.set([...current, name]);
    }
    this.resetPagination();
  }

  isCategorySelected(name: string): boolean {
    return this.selectedCategories().includes(name);
  }

  toggleScentFamily(name: string): void {
    const family = name.toLowerCase() as ScentFamily;
    const current = this.selectedScentFamilies();
    if (current.includes(family)) {
      this.selectedScentFamilies.set(current.filter((f) => f !== family));
    } else {
      this.selectedScentFamilies.set([...current, family]);
    }
    this.resetPagination();
  }

  isScentFamilySelected(name: string): boolean {
    return this.selectedScentFamilies().includes(name.toLowerCase() as ScentFamily);
  }

  toggleOccasion(name: string): void {
    const occ = name.toLowerCase() as Occasion;
    const current = this.selectedOccasions();
    if (current.includes(occ)) {
      this.selectedOccasions.set(current.filter((o) => o !== occ));
    } else {
      this.selectedOccasions.set([...current, occ]);
    }
    this.resetPagination();
  }

  isOccasionSelected(name: string): boolean {
    return this.selectedOccasions().includes(name.toLowerCase() as Occasion);
  }

  onMinPriceInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const val = Number(input.value);
    if (val <= this.maxPrice()) {
      this.minPrice.set(val);
      this.resetPagination();
    } else {
      input.value = String(this.maxPrice());
      this.minPrice.set(this.maxPrice());
      this.resetPagination();
    }
  }

  onMaxPriceInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const val = Number(input.value);
    if (val >= this.minPrice()) {
      this.maxPrice.set(val);
      this.resetPagination();
    } else {
      input.value = String(this.minPrice());
      this.maxPrice.set(this.minPrice());
      this.resetPagination();
    }
  }

  setSortOption(option: ProductSortOption): void {
    this.sortOption.set(option);
    this.isSortDropdownOpen.set(false);
    this.resetPagination();
  }

  toggleSortDropdown(): void {
    this.isSortDropdownOpen.update((open) => !open);
  }

  closeSortDropdown(): void {
    this.isSortDropdownOpen.set(false);
  }

  prevPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update((p) => p - 1);
      this.scrollToTop();
    }
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((p) => p + 1);
      this.scrollToTop();
    }
  }

  private resetPagination(): void {
    this.currentPage.set(1);
  }

  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  clearFilters(): void {
    this.selectedCategories.set([]);
    this.selectedScentFamilies.set([]);
    this.selectedOccasions.set([]);
    this.minPrice.set(this.minLimit);
    this.maxPrice.set(this.maxLimit);
    this.resetPagination();
  }

  toggleMobileFilter(): void {
    this.isMobileFilterOpen.update((v) => !v);
  }

  onAddToCart(product: Product): void {

  }
}
