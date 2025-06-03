export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  description: string;
  features?: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  reviews?: Review[];
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image?: string;
  description?: string;
}