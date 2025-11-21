import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { Product } from '../../shared/models/product.model';
import { CommonModule, CurrencyPipe, NgForOf } from '@angular/common';
import { ProductService } from '../../shared/services/product.service';
import { Observable } from 'rxjs';
import { TruncatePipe } from '../../shared/pipes/truncate';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { SnackbarService } from '../../shared/services/snackbar.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule, CurrencyPipe, TruncatePipe, MatCardModule, MatButtonModule, MatPaginatorModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private snackbar = inject(SnackbarService);

  products: Product[] = [];
  pageSize = 6;
  currentPage = 0;

  products$!: Observable<Product[]>;

  ngOnInit(): void {
    this.productService.loadProducts();
    this.products$ = this.productService.products$;
    this.products$.subscribe((products) => (this.products = products));
  }

  get pagedProducts(): Product[] {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    return this.products.slice(start, end);
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.snackbar.success(`Added "${product.name}" to cart successfully.`);
  }
}
