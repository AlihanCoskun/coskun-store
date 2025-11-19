import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { Product } from '../../shared/models/product.model';
import { CommonModule, CurrencyPipe, NgForOf } from '@angular/common';
import { ProductService } from '../../shared/services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit {
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  products$!: Observable<Product[]>;

  ngOnInit(): void {
    this.productService.loadProducts();
    this.products$ = this.productService.products$;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
