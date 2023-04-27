import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    name: string;
}

const Input: React.FC<InputProps> = ({ placeholder, name, className, ...props }) => {
    const baseClasses = "border border-gray-400 p-2 text-center rounded-full";

    // Append the passed className prop to baseClasses
    const inputClasses = className ? `${baseClasses} ${className}` : baseClasses;

    return (
        <input className={inputClasses} {...props} placeholder={placeholder} name={name} />
    );
};

export default Input;
