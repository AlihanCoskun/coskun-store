import { inject, Injectable } from "@angular/core";
import { createEffect, Actions, ofType, ROOT_EFFECTS_INIT } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import {
    addItem,
    clearCart,
    loadCartFromStorageSuccess,
    removeItem,
    updateQuantity,
} from './cart.actions';
import { selectCartItems } from './cart.selectors';
import { CartItem } from './cart.models';
import { map, tap, withLatestFrom } from "rxjs";

const STORAGE_KEY = 'coskun-store-cart';

@Injectable()

export class CartEffects {
    private actions$ = inject(Actions);
    private store = inject(Store);

    loadFromStorage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROOT_EFFECTS_INIT),
            map(() => {
                if (typeof window === 'undefined') {
                    return loadCartFromStorageSuccess({ items: [] });
                }
                const raw = localStorage.getItem(STORAGE_KEY);
                if (!raw) {
                    return loadCartFromStorageSuccess({ items: [] });
                }
                try {
                    const parsed = JSON.parse(raw) as CartItem[];
                    return loadCartFromStorageSuccess({ items: parsed });
                } catch {
                    return loadCartFromStorageSuccess({ items: [] });
                }
            })
        )
    )

    persistToStore$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addItem, removeItem, updateQuantity, clearCart),
            withLatestFrom(this.store.select(selectCartItems)),
            tap(([action, items]) => {
                if (typeof window === 'undefined') return;
                localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
            })
        ),
        { dispatch: false },
    )
}