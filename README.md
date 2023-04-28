# Shopping List App

This is a simple Shopping List application built using React, TypeScript, Redux, and Tailwind CSS. The app allows you to add products to a list, update their quantities, and remove them from the list as needed. Since this project is relatively small, there isn't a dedicated utils folder for reusable functionality. Instead, the app focuses on providing a minimalistic and easy-to-understand structure.
## Live Demo

You can view a live demo of the project here: [Demo Link](http://162.19.137.11:42065/)

## Features

- Add products to the list with the desired amount

- Automatically generate a random list of products on initialization

- Update the product name and amount in the list

- Remove products from the list

- Responsive design using Tailwind CSS with a clean, minimalistic interface

## Components

### App

The main App component is the entry point of the application. It renders the ProductList and AddProductForm components inside a container.

### AddProductForm

This component provides an input form for adding new products to the list. Users can enter a product name and amount, then click the "Add" button to add the product to the list.

### ProductList

This component displays a list of products, each represented by a ProductItem component. It initializes with a random list of products on the first render.

### ProductItem

Each ProductItem component represents an individual product in the list. Users can edit the product's name and amount or remove the product from the list.

### Button

A reusable button component with customizable variants (primary, secondary, or danger) to provide different styling based on the context.

### Input

A reusable input component used for receiving user input in forms.


## Dependencies 

### React

React is a popular JavaScript library for building user interfaces. It allows us to create reusable UI components and manage the application state efficiently. It is the core library used in this project for structuring and rendering the UI.

### Redux

Redux is a state management library that provides a centralized store for our application's state. It helps to maintain consistency across the app and makes state management more predictable. In this project, Redux is used to manage the shopping list items and their respective quantities.

### TypeScript

TypeScript is a superset of JavaScript that adds static types to the language. It helps to catch type-related errors during development and improve code quality. In this project, TypeScript is used to ensure type safety, making the code more robust and easier to refactor.

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework that allows us to quickly build custom designs by composing utility classes. It promotes a consistent styling approach and helps to reduce the amount of custom CSS required. I find Tailwind more elegant than bootstrap and that is why I decided to use it for this project.

### Web Vitals

Web Vitals is a set of performance metrics aimed at measuring the user experience on the web. By using the Web Vitals package, we can monitor, report, and optimize the performance of our application. In this project, it's used to ensure that the app meets performance and user experience benchmarks.

## Jest and Testing Library

Jest is a JavaScript testing framework that allows us to write and execute tests for our code, while Testing Library is a set of tools that helps us test React components in a user-centric manner. In this project, Jest and Testing Library are used to write and run tests for the app's functionality, ensuring the code's reliability and maintainability.

## Getting Started
To run this application, follow these steps:

Clone the repository to your local machine
Navigate to the project folder and install the required dependencies with npm install or yarn
Run the application in development mode with npm start or yarn start
Open a browser and navigate to http://localhost:3000 to view the app

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
