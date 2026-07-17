import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface CartItem {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
  totalPrice: () => number;
}

// Premium global Zustand transaction cart storage layer wrapped securely with client-side persist middleware
export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      // Influx item action layer evaluating duplication profiles safely
      addToCart: (item) =>
        set((state) => {
          const exist = state.items.find((product) => product._id === item._id);

          if (exist) {
            return {
              items: state.items.map((product) =>
                product._id === item._id
                  ? { ...product, quantity: product.quantity + (item.quantity || 1) }
                  : product
              ),
            };
          }

          return {
            items: [...state.items, { ...item, quantity: item.quantity || 1 }],
          };
        }),

      // Explicit item cancellation pipeline tracking identifier keys strings
      removeFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item._id !== id),
        })),

      // Single integer incremental tracking modifier sequence block
      increaseQuantity: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item._id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        })),

      // Single integer decremental modification layout safety sequence constraint block
      decreaseQuantity: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item._id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        })),

      // Instant global flush pipeline clearing shopper storage workspace configurations array
      clearCart: () => set({ items: [] }),

      // Continuous programmatic loop multiplier returning accounting numbers evaluation scores integers
      totalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "23-collections-cart-vault", // Unique storage identification name tag mapping tracking definitions key string registry
      storage: createJSONStorage(() => (typeof window !== "undefined" ? localStorage : (null as any))), // Avoid serverless server pre-rendering hydration layout context variables compile-ready error collisions
    }
  )
);

