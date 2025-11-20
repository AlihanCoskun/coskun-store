import { createReducer, on } from '@ngrx/store';
import { getProducts } from './product.actions';
import { ProductState } from './product.model';

export const initialProductState: ProductState = {
    products: [
         {
            id: 1,
            name: 'Natural Soap Bar',
            description: '100% natural, handmade, suitable for daily use',
            price: 99.99,
            imageUrl: 'assets/soap-bar.svg',
        },
        {
            id: 2,
            name: 'Natural Soap Bar M',
            description: '100% natural, handmade, suitable for daily use and printed with the letter M',
            price: 99.99,
            imageUrl: 'assets/soap-bar.svg',
        },
        {
            id: 3,
            name: 'Natural Soap Bar A',
            description: '100% natural, handmade, suitable for daily use and printed with the letter A',
            price: 99.99,
            imageUrl: 'assets/soap-bar.svg',
        },
           {
            id: 4,
            name: 'Natural Soap Bar S',
            description: '100% natural, handmade, suitable for daily use and printed with the letter S',
            price: 99.99,
            imageUrl: 'assets/soap-bar.svg',
        },
        {
            id: 5,
            name: 'Natural Candle',
            description: '100% natural, handmade, durable candle suitable for daily use',
            price: 159.99,
            imageUrl: 'assets/scented-candle.svg',
        },
         {
            id: 6,
            name: 'Natural Candle M',
            description: '100% natural, handmade, durable candle suitable for daily use and printed with the letter M',
            price: 159.99,
            imageUrl: 'assets/scented-candle.svg',
        },
        {
            id: 7,
            name: 'Natural Candle A',
            description: '100% natural, handmade, durable candle suitable for daily use and printed with the letter A',
            price: 159.99,
            imageUrl: 'assets/scented-candle.svg',
        },
             {
            id: 8,
            name: 'Natural Candle S',
            description: '100% natural, handmade, durable candle suitable for daily use and printed with the letter S',
            price: 159.99,
            imageUrl: 'assets/scented-candle.svg',
        },
    ]
}


export const productReducer = createReducer(
    initialProductState,

    on(getProducts, (): ProductState => initialProductState),
)