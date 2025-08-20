export interface ProductReview {
  author: string;
  text: string;
  rating: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  rating: number;
  category: string;
  features: string[];
  amazonUrl: string;
  images: string[];
  review?: ProductReview;
}
