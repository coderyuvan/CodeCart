import { create } from 'zustand';
import { round2 } from '../utils';
import { OrderItem } from '../models/OrderModel';

// Cart Type Definition
type Cart = {
  items: OrderItem[];
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  increase: (item: OrderItem) => void;
};

// Price Calculation Helper
const calcPrice = (items: OrderItem[]) => {
  const itemsPrice = round2(items.reduce((acc, item) => acc + item.price * item.qty, 0));
  const shippingPrice = round2(itemsPrice > 100 ? 0 : 100);
  const taxPrice = round2(0.15 * itemsPrice);
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);
  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};

// Initial State
const initialState: Omit<Cart, 'increase'> = {
  items: [],
  itemsPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
};

// Zustand Store
export const useCartService = create<Cart>((set) => ({
  ...initialState,
  increase: (item: OrderItem) => {
    set((state) => {
      const exist = state.items.find((x) => x.slug === item.slug);
      const updatedCartItems = exist
        ? state.items.map((x) =>
            x.slug === item.slug ? { ...exist, qty: exist.qty + 1 } : x
          )
        : [...state.items, { ...item, qty: 1 }];
      const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
        calcPrice(updatedCartItems);
      return {
        items: updatedCartItems,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      };
    });
  },
}));
