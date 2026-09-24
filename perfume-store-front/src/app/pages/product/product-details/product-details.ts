import { Component, computed, inject, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product, ProductVariant } from '../../../core/models/product.model';
import { ProductService } from '../../../core/services/product-services';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink, TitleCasePipe, ProductCard],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  product = signal<Product | undefined>(undefined);

  selectedImageIndex = signal<number>(0);
  selectedVariant = signal<ProductVariant | null>(null);
  isGiftWrapped = signal<boolean>(false);
  quantity = signal<number>(1);

  galleryImages = computed(() => {
    return this.product()?.images ?? [];
  });

  selectedImage = computed<string>(() => {
    const images = this.galleryImages();
    const idx = this.selectedImageIndex();
    return images[idx]?.url ?? '';
  });

  currentPrice = computed<number>(() => {
    return this.selectedVariant()?.price ?? 0;
  });

  totalPrice = computed<number>(() => {
    return this.currentPrice() * this.quantity();
  });

  relatedProducts = computed<Product[]>(() => {
    const current = this.product();
    if (!current) return [];
    return this.productService.getRelatedProducts(current);
  });

  constructor() {
    const initialId = this.route.snapshot.paramMap.get('id');
    this.loadProduct(initialId);
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id && id !== String(this.product()?.id)) {
        this.loadProduct(id);
      }
    });
  }

  private loadProduct(id: string | null): void {
    const product = id ? this.productService.getProductById(id) : undefined;
    this.product.set(product);
    if (product) {
      this.selectedImageIndex.set(0);
      this.selectedVariant.set(product.variants?.[0] ?? null);
      this.isGiftWrapped.set(false);
      this.quantity.set(1);
    }
  }

  selectImage(index: number): void {
    this.selectedImageIndex.set(index);
  }

  selectVariant(variant: ProductVariant): void {
    this.selectedVariant.set(variant);
  }

  toggleGiftWrapping(): void {
    this.isGiftWrapped.update((prev) => !prev);
  }

  incrementQuantity(): void {
    this.quantity.update((qty) => qty + 1);
  }

  decrementQuantity(): void {
    this.quantity.update((qty) => (qty > 1 ? qty - 1 : 1));
  }

  addToCart(): void { }
}
