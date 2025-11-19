import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.model';

export const selectProductState = createFeatureSelector<ProductState>('product');

export const selectProducts = createSelector(
    selectProductState,
    (state) => state.products
);