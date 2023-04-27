import React from "react";
import PropTypes from "prop-types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger";
}

const BASE_CLASSES =
    "inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";

const PRIMARY_CLASSES = "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500";
const SECONDARY_CLASSES = "bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500";
const DANGER_CLASSES = "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500";

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", className, ...props }) => {
    let buttonClasses = BASE_CLASSES;

    switch (variant) {
        case "primary":
            buttonClasses += ` ${PRIMARY_CLASSES}`;
            break;
        case "secondary":
            buttonClasses += ` ${SECONDARY_CLASSES}`;
            break;
        case "danger":
            buttonClasses += ` ${DANGER_CLASSES}`;
            break;
        default:
            buttonClasses += ` ${PRIMARY_CLASSES}`;
            break;
    }

    // Append the passed className prop to buttonClasses
    if (className) {
        buttonClasses += ` ${className}`;
    }

    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Button;
