# Property Rental Platform

This project is a property rental platform built with React. It allows users to browse properties, add them to a cart, and book them through a checkout process.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Features

- Browse property listings with filters for location, price, and bedrooms.
- Add properties to a cart for booking.
- View a cart summary and proceed to checkout.
- Fill out a booking form and confirm booking.
- Clear cart items upon successful booking.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: Declarative routing for React applications.
- **React Icons**: Popular icons for React applications.
- **Context API**: For state management to handle cart operations.
- **CSS**: For styling components.
- **Fetch API**: To fetch property data from a JSON file.
- **HTML**: Basic markup for the application.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/property-rental-platform.git
    cd property-rental-platform
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

The application will run at `http://localhost:3000`.

## Usage

1. Navigate to the homepage to view the property listings.
2. Use the filters to narrow down your search based on location, price, and bedrooms.
3. Add properties to your cart.
4. Go to the cart page to view the summary of selected properties.
5. Can extend the number of days and if not interested remove it from the cart.
6. Click on the checkout button to proceed to the booking form.
7. Fill in your booking details and confirm the booking. The cart will be cleared upon successful booking.