import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { Observable } from 'rxjs';
import { CartItem } from '../../store/cart/cart.models';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, CurrencyPipe, AsyncPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  private cartService = inject(CartService);

  items$: Observable<CartItem[]> = this.cartService.items$;
  totalItems$: Observable<number> = this.cartService.totalItems$;
  totalPrice$: Observable<number> = this.cartService.totalPrice$;

  remove(id: number) {
    this.cartService.removeFromCart(id);
  }

  updateQuantity(id: number, event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    this.cartService.changeQuantity(id, value);
  }

  clear() {
    this.cartService.clearCart();
  }
}
