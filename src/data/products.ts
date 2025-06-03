import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'c1',
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Latest gadgets and electronic devices',
  },
  {
    id: 'c2',
    name: 'Clothing',
    slug: 'clothing',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Trendy and comfortable clothing for all seasons',
  },
  {
    id: 'c3',
    name: 'Home Goods',
    slug: 'home-goods',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Furniture and decor for your living space',
  },
  {
    id: 'c4',
    name: 'Books',
    slug: 'books',
    image: 'https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Best-selling books and must-read titles',
  },
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Wireless Bluetooth Headphones',
    price: 12499,
    originalPrice: 16999,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Premium wireless headphones with active noise cancellation and 30 hours of battery life.',
    features: ['Active Noise Cancellation', '30-hour Battery Life', 'Bluetooth 5.0', 'Comfortable Fit'],
    inStock: true,
    rating: 4.7,
    reviewCount: 342,
    reviews: [
      {
        id: 'r1',
        userName: 'Sarah Johnson',
        rating: 5,
        comment: 'These headphones are amazing! The sound quality is exceptional and the noise cancellation works perfectly.',
        date: '2024-02-15',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
      },
      {
        id: 'r2',
        userName: 'Michael Chen',
        rating: 4,
        comment: 'Great battery life and comfortable for long listening sessions. The app could use some improvements.',
        date: '2024-02-10',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      }
    ]
  },
  {
    id: 'p2',
    name: 'Smart Watch Series 7',
    price: 32999,
    originalPrice: 37999,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'The latest smartwatch with health monitoring features, GPS, and a beautiful retina display.',
    features: ['Heart Rate Monitor', 'GPS', 'Water Resistant', 'Fitness Tracking'],
    inStock: true,
    rating: 4.9,
    reviewCount: 521,
    reviews: [
      {
        id: 'r3',
        userName: 'Emma Rodriguez',
        rating: 5,
        comment: 'This watch has transformed my fitness routine. The tracking features are incredibly accurate.',
        date: '2024-02-18',
        avatar: 'https://randomuser.me/api/portraits/women/63.jpg'
      }
    ]
  },
  {
    id: 'p3',
    name: 'Premium Cotton T-Shirt',
    price: 1499,
    originalPrice: 1999,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Soft, comfortable cotton t-shirt with a modern fit. Available in multiple colors.',
    features: ['100% Cotton', 'Machine Washable', 'Multiple Colors', 'Sizes S-XXL'],
    inStock: true,
    rating: 4.5,
    reviewCount: 128,
    reviews: []
  },
  {
    id: 'p4',
    name: 'Designer Jeans',
    price: 3999,
    originalPrice: 4499,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Classic fit jeans with premium denim material that offers both style and comfort.',
    features: ['Premium Denim', 'Classic Fit', 'Durable Design', 'Sizes 28-40'],
    inStock: true,
    rating: 4.6,
    reviewCount: 215,
    reviews: []
  },
  {
    id: 'p5',
    name: 'Modern Coffee Table',
    price: 18999,
    originalPrice: 22999,
    category: 'home-goods',
    image: 'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Stylish coffee table with a mid-century modern design and solid oak construction.',
    features: ['Solid Oak', 'Easy Assembly', 'Durable Finish', 'Spacious Design'],
    inStock: true,
    rating: 4.8,
    reviewCount: 97,
    reviews: []
  },
  {
    id: 'p6',
    name: 'Luxury Bedding Set',
    price: 8999,
    originalPrice: 10999,
    category: 'home-goods',
    image: 'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Premium Egyptian cotton bedding set with duvet cover, fitted sheet, and pillowcases.',
    features: ['Egyptian Cotton', 'Hypoallergenic', 'Machine Washable', 'Multiple Colors'],
    inStock: true,
    rating: 4.7,
    reviewCount: 183,
    reviews: []
  },
  {
    id: 'p7',
    name: 'Best-Selling Novel',
    price: 599,
    originalPrice: 799,
    category: 'books',
    image: 'https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A captivating story of adventure and mystery that topped the charts for weeks.',
    features: ['Hardcover', 'Award-Winning Author', '400 Pages', 'Includes Bonus Chapter'],
    inStock: true,
    rating: 4.9,
    reviewCount: 302,
    reviews: []
  },
  {
    id: 'p8',
    name: 'Cookbook Collection',
    price: 2499,
    originalPrice: 2999,
    category: 'books',
    image: 'https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Collection of three bestselling cookbooks featuring recipes from around the world.',
    features: ['3-Book Set', 'Full-Color Photos', '500+ Recipes', 'Beginner-Friendly'],
    inStock: true,
    rating: 4.8,
    reviewCount: 149,
    reviews: []
  },
];

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter(product => product.category === categorySlug);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};