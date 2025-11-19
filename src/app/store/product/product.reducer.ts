import { createReducer, on } from '@ngrx/store';
import { getProducts } from './product.actions';
import { ProductState } from './product.model';

export const initialProductState: ProductState = {
    products: [
         {
            id: 1,
            name: 'Natural Soap Bar',
            description: '100% natural, handmade, suitable for daily use',
            price: 9.99,
        },
        {
            id: 2,
            name: 'Natural Soap Bar M',
            description: '100% natural, handmade, suitable for daily use and printed with the letter M',
            price: 9.99,
        },
        {
            id: 3,
            name: 'Natural Soap Bar A',
            description: '100% natural, handmade, suitable for daily use and printed with the letter A',
            price: 9.99,
        },
        {
            id: 4,
            name: 'Natural Candle',
            description: '100% natural, handmade, durable candle suitable for daily use',
            price: 15.99,
        },
         {
            id: 5,
            name: 'Natural Candle A',
            description: '100% natural, handmade, durable candle suitable for daily use and printed with the letter A',
            price: 15.99,
        },
    ]
}


export const productReducer = createReducer(
    initialProductState,

    on(getProducts, (): ProductState => initialProductState),
)