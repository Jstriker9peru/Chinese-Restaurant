import { DATA_INITIALIZED } from './mainConstants';

export const initializeData = (products, categories) => {
    return { 
        type: DATA_INITIALIZED,
        data: {
            products,
            categories
        }
    }
}