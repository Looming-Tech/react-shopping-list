import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products/productsSlice";
import { useDispatch, useSelector, TypedUseSelectorHook  } from "react-redux";

export const store = configureStore({
    reducer: {
        products: productsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
