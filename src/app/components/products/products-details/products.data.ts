// src/app/components/products/products.data.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'livestock',
    name: 'Livestock Management',
    description: 'Track herd health, feeding schedules, and breeding records in one place.',
    category: 'Livestock'
  },
  {
    id: 'crop',
    name: 'Crop Management',
    description: 'Plan planting cycles, monitor yields, and manage harvest schedules.',
    category: 'Crops'
  },
  {
    id: 'farm',
    name: 'Farm Management',
    description: 'Oversee equipment, staff, and daily operations from a single dashboard.',
    category: 'Operations'
  }
];