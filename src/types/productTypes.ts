// slices/products/types/productTypes.ts

export interface Product {
    id: string;
    name: string;
    amount: number;
}

export interface ProductAddForm {
    name: string;
    amount: string;
}

export interface AddProductPayload {
    name: string;
    amount: number;
}

export interface RemoveProductPayload {
    id: string;
}
