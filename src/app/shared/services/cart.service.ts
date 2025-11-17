import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { CartItem } from '../../store/cart/cart.models';
import {
  addItem,
  clearCart,
  removeItem,
  updateQuantity,
} from '../../store/cart/cart.actions';
import {
  selectCartItems,
  selectCartTotalItems,
  selectCartTotalPrice,
} from '../../store/cart/cart.selectors';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private store = inject(Store);

  items$: Observable<CartItem[]> = this.store.select(selectCartItems);
  totalItems$: Observable<number> = this.store.select(selectCartTotalItems);
  totalPrice$: Observable<number> = this.store.select(selectCartTotalPrice);

  addToCart(product: Product) {
    this.store.dispatch(addItem({ product }));
  }

  removeFromCart(productId: number) {
    this.store.dispatch(removeItem({ productId }));
  }

  changeQuantity(productId: number, quantity: number) {
    this.store.dispatch(updateQuantity({ productId, quantity }));
  }

  clearCart() {
    this.store.dispatch(clearCart());
  }
}