import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import AddProductForm from "./components/AddProductForm";
import ProductList from "./components/ProductList";

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="container mx-auto p-8">
                <header className="flex justify-center items-center mb-4">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="text-4xl font-bold mb-6">Shopping List</h1>
                </header>
                <main>
                    <ProductList/>
                    <AddProductForm/>
                </main>
            </div>
        </div>
    );
}

export default App;
