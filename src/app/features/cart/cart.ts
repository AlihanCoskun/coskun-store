import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { Observable } from 'rxjs';
import { CartItem } from '../../store/cart/cart.models';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { Product } from '../../shared/models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogData } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, CurrencyPipe, AsyncPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  private cartService = inject(CartService);
  private snackbar = inject(SnackbarService);
  private dialog = inject(MatDialog);

  items$: Observable<CartItem[]> = this.cartService.items$;
  totalItems$: Observable<number> = this.cartService.totalItems$;
  totalPrice$: Observable<number> = this.cartService.totalPrice$;

  remove(product: Product) {
    this.cartService.removeFromCart(product.id);
    this.snackbar.info(`${product.name} has been removed from the cart.`)
  }

  updateQuantity(id: number, event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    this.cartService.changeQuantity(id, value);
  }

clear() {
  const data: ConfirmDialogData = {
    message: 'Are you sure that you would like to remove the items from your cart?',
  };

  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    data,
    width: '360px',
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      this.cartService.clearCart();
    }
  });
}

}
