import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductList } from './pages/product/product-list/product-list';
import { ProductDetails } from './pages/product/product-details/product-details';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'product', component: ProductList },
  { path: 'products', redirectTo: 'product', pathMatch: 'full' },
  { path: 'product/:id', component: ProductDetails },
  { path: '**', redirectTo: 'home' },
];
