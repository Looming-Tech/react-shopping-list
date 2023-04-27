import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {Provider} from "react-redux";
import App from "./App";
import {store} from "./store/store";

const renderWithRedux = (component: JSX.Element) => {
    return render(<Provider store={store}>{component}</Provider>);
};

test('renders shopping list header', () => {
    renderWithRedux(<App/>);
    const headerElement = screen.getByText(/Shopping List/i);
    expect(headerElement).toBeInTheDocument();
});

test('renders add product form', () => {
    renderWithRedux(<App/>);
    const addFormElement = screen.getByPlaceholderText('Name');
    expect(addFormElement).toBeInTheDocument();
});

test('renders product list', () => {
    renderWithRedux(<App/>);
    const productList = screen.getByText('Product');
    const productAmount = screen.getByText('Amount');
    const productActions = screen.getByText('Actions');

    expect(productList).toBeInTheDocument();
    expect(productAmount).toBeInTheDocument();
    expect(productActions).toBeInTheDocument();
});
