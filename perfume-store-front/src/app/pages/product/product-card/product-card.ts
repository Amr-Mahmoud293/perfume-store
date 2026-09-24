import { Component, computed, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();
  addToCart = output<Product>();

  readonly subtitle = computed(() => {
    const p = this.product();
    const family = p.scentFamily?.[0] || 'FRAGRANCE';
    const top = p.notes?.top?.[0] || '';
    const base = p.notes?.base?.[0] || '';
    if (top && base) {
      return `${family} / ${top} & ${base}`.toUpperCase();
    }
    return family.toUpperCase();
  });

  onAddToCart(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
    this.addToCart.emit(this.product());
  }
}
