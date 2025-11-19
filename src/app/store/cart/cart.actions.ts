import { createAction, props } from '@ngrx/store';
import { Product } from '../../shared/models/product.model';
import { CartItem } from './cart.models';

export const addItem = createAction(
    '[Cart] Add Item',
    props<{ product: Product }>()
);

export const removeItem = createAction(
    '[Cart] Remove Item',
    props<{ productId: number }>()
);

export const updateQuantity = createAction(
    '[Cart] Update Quantity',
    props<{ productId: number, quantity: number }>()
);

export const clearCart = createAction(
    '[Cart] Clear Cart'
);

export const loadCartFromStorageSuccess = createAction(
  '[Cart] Load From Storage Success',
  props<{ items: CartItem[] }>(),
);