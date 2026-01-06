
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export interface ProductOption {
  id: 'basic' | 'complete';
  name: string;
  price: number;
  originalPrice: number;
  features: string[];
  isFeatured?: boolean;
}

export enum PromotionState {
  NONE = 'NONE',
  ACTIVATED = 'ACTIVATED'
}
