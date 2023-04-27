import React, {useEffect, useRef} from "react";
import {RootState, useAppDispatch, useAppSelector} from "../store/store";
import ProductItem from "./ProductItem";
import {addProduct} from "../store/slices/products/productsSlice";

const generateRandomProducts = (count: number) => {
    const products = [];
    const productNames = ["Apple", "Banana", "Carrot"];

    for (let i = 0; i < count; i++) {
        const randomName = productNames[Math.floor(Math.random() * productNames.length)] + " " + (i + 1);
        const randomAmount = Math.floor(Math.random() * 5) + 1;

        products.push({name: randomName, amount: randomAmount});
    }

    return products;
};

const ProductList: React.FC = () => {
    const products = useAppSelector((state: RootState) => state.products);
    const dispatch = useAppDispatch();
    const productsInitialized = useRef<boolean>(false);

    useEffect(() => {
        if (!productsInitialized.current) {
            const productCount = Math.floor(Math.random() * 11) + 5;
            const randomProducts = generateRandomProducts(productCount);

            for (const product of randomProducts) {
                dispatch(addProduct(product));
            }

            productsInitialized.current = true;
        }
    }, [dispatch, productsInitialized]);

    return (
        <section>
            <header className="grid grid-cols-12 gap-4 my-4 p-2 items-center border-2 border-dashed rounded-full">
                <div className="col-span-6">
                    <span className="text-lg">Product</span>
                </div>
                <div className="col-span-3">
                    <span className="text-lg">Amount</span>
                </div>
                <div className="col-span-3 flex justify-end mr-7">
                    <span className="text-lg">Actions</span>
                </div>
            </header>

            <hr className="mx-8 h-px border-black mt-2 mb-4 border-2"/>

            {products.length ?
                <>
                    {products.map((product) => (
                        <ProductItem key={product.id} id={product.id} name={product.name} amount={product.amount}/>
                    ))}
                </>
                :
                <>
                    <span>Please add products</span>
                </>
            }
        </section>
    );
};

export default ProductList;
