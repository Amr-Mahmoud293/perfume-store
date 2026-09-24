import { Category } from "./category.model";
export type ScentFamily = 'floral' | 'woody' | 'oriental' | 'fresh';
export type Occasion = 'birthday' | 'wedding' | 'gift' | 'gift sets' | 'personal use';

export interface ProductVariant {
    size: string;
    price: number;
}

export interface ScentNotes {
    top: string[];
    heart: string[];
    base: string[];
}

export interface ProductImage {
    url: string;
    alt: string;
}

export interface Product {
    id: number | string;
    name: string;
    description: string;
    category: Category;
    scentFamily: ScentFamily[];
    notes: ScentNotes;
    occasions: Occasion[];
    inStock: boolean;
    images: ProductImage[];
    variants: ProductVariant[];
    hasGiftWrappingOption?: boolean;
}