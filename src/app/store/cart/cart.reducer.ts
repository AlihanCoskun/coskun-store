import { createReducer, on } from '@ngrx/store';
import { CartState } from './cart.models';
import { addItem, clearCart, removeItem, updateQuantity } from './cart.actions';

export const initialState: CartState = {
    items: []
}

export const cartReducer = createReducer(
    initialState,

    on(addItem, (state, { product }): CartState => {
        const existing = state.items.find((i) => i.product.id === product.id);

        if (existing) {
            return {
                ...state,
                items: state.items.map((item) => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item),
            }
        }
        return {
            ...state,
            items: [...state.items, { product, quantity: 1 }],
        };
    }),

    on(removeItem, (state, { productId }): CartState => {
        return {
            ...state,
            items: state.items.filter((i) => i.product.id !== productId),
        }
    }),

    on(updateQuantity, (state, { productId, quantity }): CartState => {
        if (quantity <= 0) {
            return {
                ...state,
                items: state.items.filter((i) => i.product.id !== productId),
            }
        }

        return {
            ...state,
            items: state.items.map((item) => item.product.id === productId ? { ...item, quantity } : item),
        }
    }),

    on(clearCart, (): CartState => initialState),
);