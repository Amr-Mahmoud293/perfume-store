export type CategoryType = 'Pure Extractions' | 'Private Reserve' | 'Atelier Oils' | 'Discovery Vault' ;

export interface Category {
  id: number;
  name: CategoryType;
}