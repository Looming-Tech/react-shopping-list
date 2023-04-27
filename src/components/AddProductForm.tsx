import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/store";
import { addProduct, selectAllProducts } from "../store/slices/products/productsSlice";
import Input from "./Input";
import Button from "./Button";
import { ProductAddForm } from "../types/productTypes";

const AddProductForm: React.FC = () => {
    const [formValues, setFormValues] = useState<ProductAddForm>({
        name: "",
        amount: "",
    });
    const [error, setError] = useState<string>("");
    const products = useAppSelector(selectAllProducts);
    const dispatch = useAppDispatch();

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const productNameExists = (name: string): boolean => {
        return products.some((product) => product.name.toLowerCase() === name.toLowerCase());
    };

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        setError("");

        const parsedAmount = parseInt(formValues.amount, 10);

        if (!formValues.name.trim() || !formValues.amount.trim() || isNaN(parsedAmount) || parsedAmount <= 0) {
            setError("Please fill out both fields with valid values.");
            return;
        }

        if (productNameExists(formValues.name)) {
            setError("The product already exists.");
            return;
        }

        dispatch(addProduct({ name: formValues.name, amount: parsedAmount }));

        setFormValues({ name: "", amount: "" });
    };

    return (
        <section className="mt-12">
            <header className="m-3 text-left border-2 border-dashed rounded-full px-6 py-2">
                <h1 className="text-2xl font-bold">Add new product</h1>
            </header>

            <hr className="mx-8 h-px border-black mt-2 mb-4 border-2" />

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-12 gap-2"
            >
                <Input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    className="col-span-6 w-full"
                />
                <Input
                    type="number"
                    placeholder="Amount"
                    name="amount"
                    value={formValues.amount}
                    onChange={handleInputChange}
                    className="col-span-3 w-full"
                />
                <Button type="submit" variant="primary" className="col-span-3 w-full">
                    Add
                </Button>
            </form>
            {error && (
                <p className="text-red-500 mt-4 text-center">{error}</p>
            )}
        </section>
    );
};

export default AddProductForm;
