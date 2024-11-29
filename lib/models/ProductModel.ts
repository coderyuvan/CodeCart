export type Product = {
    _id?: string;
    name: string;
    slug: string;
    image: string;
    banner?: string;
    price: number;
    brand: string;
    description: string;
    category: string;
    rating: number;
    numReviews: number;
    countInStock: number;
    colors?: string[];  // Updated to allow array of strings
    sizes?: string[];   // Updated to allow array of strings
  };
  