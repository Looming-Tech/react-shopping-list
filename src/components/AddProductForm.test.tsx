import React from 'react';
import {render, fireEvent, screen, cleanup, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import AddProductForm from './AddProductForm';
import {reset} from '../store/slices/products/productsSlice';
import {store} from "../store/store";

const renderWithRedux = (component: JSX.Element) => {
    const utils = render(<Provider store={store}>{component}</Provider>);
    return {
        ...utils,
        unmount: utils.unmount,
    };
};

describe('AddProductForm', () => {
    let originalDispatch: typeof store.dispatch;

    beforeEach(() => {
        originalDispatch = store.dispatch;
        jest.spyOn(store, 'dispatch').mockImplementation((action) => {
            originalDispatch(action);
        });
        store.dispatch(reset());
    });

    afterEach(() => {
        store.dispatch = originalDispatch;
        cleanup();
    });


    test('renders form correctly', () => {
        renderWithRedux(<AddProductForm />);
        const nameLabel = screen.getByPlaceholderText(/Name/i);
        const amountLabel = screen.getByPlaceholderText(/Amount/i);
        const addButton = screen.getByRole('button', { name: /Add/i });

        expect(nameLabel).toBeInTheDocument();
        expect(amountLabel).toBeInTheDocument();
        expect(addButton).toBeInTheDocument();
    });

    test('able to add a product successfully', async () => {
        renderWithRedux(<AddProductForm />);
        const nameInput = screen.getByPlaceholderText(/Name/i);
        const amountInput = screen.getByPlaceholderText(/Amount/i);
        const addButton = screen.getByRole('button', { name: /Add/i });

        fireEvent.change(nameInput, { target: { value: 'Test Product' } });
        fireEvent.change(amountInput, { target: { value: '5' } });
        userEvent.click(addButton);

        // Wait for the product name to be added
        await waitFor(() => {
            const productAdded = store.getState().products[0];
            expect(productAdded.name).toBe('Test Product');
        });

        // Wait for the product amount to be added
        await waitFor(() => {
            const productAdded = store.getState().products[0];
            expect(productAdded.amount).toBe(5);
        });
    });


});
