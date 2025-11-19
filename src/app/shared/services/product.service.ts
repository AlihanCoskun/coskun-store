import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { getProducts } from "../../store/product/product.actions";
import { selectProducts } from "../../store/product/product.selector";
import { Product } from "../models/product.model";

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private store = inject(Store);

    products$ = this.store.select(selectProducts);

    loadProducts() {
        this.store.dispatch(getProducts());
    }
}