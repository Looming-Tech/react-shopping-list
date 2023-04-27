import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import {AddProductPayload, Product, RemoveProductPayload} from "../../../types/productTypes";
import {AddProductReturn, RemoveProductReturn} from "../../../types/productPayloads";
import {RootState} from "../../store";

const initialState: Product[] = [];

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<AddProductPayload>): AddProductReturn => {
            const { name, amount } = action.payload;
            state.push({ id: nanoid(), name, amount });
        },
        updateProduct: (state, action: PayloadAction<Product>) => {
            const { id, name, amount } = action.payload;
            const existingProduct = state.find((product) => product.id === id);
            if (existingProduct) {
                existingProduct.name = name;
                existingProduct.amount = amount;
            }
        },
        removeProduct: (state, action: PayloadAction<RemoveProductPayload>): RemoveProductReturn => {
            const { id } = action.payload;
            return state.filter((product) => product.id !== id);
        },
        reset: () => {
            return initialState;
        },
    },
});
export const selectAllProducts = (state: RootState) => state.products;
export const { addProduct, removeProduct, updateProduct, reset } = productsSlice.actions;
export default productsSlice.reducer;
