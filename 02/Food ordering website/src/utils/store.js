import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist((set, get) => ({
    // states
    apiData: null,
    regularCards: [],
    cart: [],
    qty: {},
    error: null,
    isLoading: true,

    // functions
    setAddItem: (item) => {
      set((state) => {
        const newQty = {
          ...state.qty,
          [item]: state.qty[item] ? state.qty[item] + 1 : 1,
        };
        // Only add to cart if not already present
        return {
          cart: state.cart.includes(item) ? state.cart : [...state.cart, item],
          qty: newQty,
        };
      });
    },

    setRemoveItem: (item) => {
      set((state) => {
        const newQty = { ...state.qty };
        if (newQty[item]) {
          newQty[item] -= 1;
          if (newQty[item] <= 0) {
            delete newQty[item];
            // Remove from cart if qty is 0
            return {
              cart: state.cart.filter((id) => id !== item),
              qty: newQty,
            };
          }
        }
        return {
          cart: state.cart,
          qty: newQty,
        };
      });
    },

    setClearItem: () => {
      set(() => ({ cart: [] }));
    },
    setApiData: (data) => {
      set({ apiData: data });
    },
  })),
  { name: "cartStorage" }
);
