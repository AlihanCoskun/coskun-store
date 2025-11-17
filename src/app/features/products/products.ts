import { Component, inject } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { Product } from '../../shared/models/product.model';
import { CommonModule, CurrencyPipe, NgForOf } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
private cartService = inject(CartService);

  products: Product[] = [
    {
      id: 1,
      name: 'Starter Digital Pack',
      description: 'Perfect entry-level digital product bundle.',
      price: 29,
    },
    {
      id: 2,
      name: 'Pro Seller Kit',
      description: 'Advanced tools to scale your digital store.',
      price: 79,
    },
    {
      id: 3,
      name: 'Ultimate Growth Suite',
      description: 'All-in-one package to maximise your earnings.',
      price: 149,
    },
  ];

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
