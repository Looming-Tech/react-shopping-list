import React, { useState } from "react";
import {RootState, useAppDispatch, useAppSelector} from "../store/store";
import { updateProduct, removeProduct } from "../store/slices/products/productsSlice";
import Input from "./Input";
import Button from "./Button";

interface ProductItemProps {
    id: string;
    name: string;
    amount: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ id, name, amount }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);
    const [newAmount, setNewAmount] = useState(amount.toString());
    const dispatch = useAppDispatch();
    const products = useAppSelector((state: RootState) => state.products);
    const [error, setError] = useState<string>("");

    const productNameExists = (name: string): boolean => {
        return products.some((product) => product.id !== id && product.name.toLowerCase() === name.toLowerCase());
    };

    const handleEdit = () => {
        if (isEditing) {
            setNewName(name);
            setNewAmount(amount.toString());
        }
        setIsEditing(!isEditing);
    };


    const handleSave = () => {
        if (!newName.trim() || !newAmount.trim()) {
            setError("Please fill out both fields with valid values.");
            return;
        }

        if (productNameExists(newName)) {
            setError("The product already exists.");
            return;
        }

        dispatch(updateProduct({ id, name: newName, amount: parseInt(newAmount, 10) }));
        setIsEditing(false);
    };

    const handleRemove = () => {
        dispatch(removeProduct({ id }));
    };

    return (
        <article className="border border-gray-300 border-dashed rounded-full p-4 mb-4">
            <div className="grid grid-cols-12 gap-4 items-center">
                {isEditing ? (
                    <>
                        <div className="col-span-6">
                            <Input
                                type="text"
                                placeholder="Name"
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                className="w-full"
                                name="name"
                            />
                        </div>
                        <div className="col-span-3">
                            <Input
                                type="number"
                                placeholder="Amount"
                                value={newAmount}
                                onChange={(e) => setNewAmount(e.target.value)}
                                className="w-full"
                                name="amount"
                            />
                        </div>
                        <div className="col-span-3 flex justify-end">
                            <Button onClick={handleEdit} variant="danger" className="mr-2">
                                Cancel
                            </Button>
                            <Button onClick={handleSave} variant="primary">
                                Save
                            </Button>
                        </div>



                        {error && (
                            <div className="col-span-12 flex justify-center">
                                <p className="text-red-500">{error}</p>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <div className="col-span-6">
                            <span className="text-lg font-semibold">{name}</span>
                        </div>
                        <div className="col-span-3">
                            <span className="ml-4 text-gray-500">{amount}</span>
                        </div>
                        <div className="col-span-3 flex justify-end">
                            <Button onClick={handleEdit} variant="secondary" className="mr-2">
                                Edit
                            </Button>
                            <Button onClick={handleRemove} variant="danger">
                                Remove
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </article>
    );
};

export default ProductItem;
