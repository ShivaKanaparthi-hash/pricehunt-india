export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  store: string;
  url: string;
  category: string;
  rating?: number;
};