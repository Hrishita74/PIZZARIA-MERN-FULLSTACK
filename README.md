# PIZZARIA – MERN Full Stack Pizza Ordering Application

PIZZARIA is a full-stack pizza ordering web application built using the "MERN stack" with a microservices-based backend architecture.  
The application allows users to browse pizzas, build custom pizzas, manage cart items and authenticate securely.

---

## Features

### User Authentication
- User Signup and Login using **username & password**
- Frontend validations:
  - Empty fields not allowed
  - No spaces or special characters in username
- Passwords securely stored using **bcrypt hashing**
- Authentication state handled using **React Context API**
- Login state persisted using **localStorage**
- Conditional Navbar rendering:
  - Login / Signup (before login)
  - Username & Logout (after login)
- Logout clears cart and redirects user to Home page

---

### Order Pizza
- Fetch pizza list from backend service
- Display pizzas with images and prices
- Add pizzas to cart
- Quantity-based cart handling
- Real-time cart count update in navbar

---

### Build Your Own Pizza
- Select ingredients dynamically from database
- Base price: ₹200
- Ingredient prices added dynamically
- Popup confirmation before adding to cart
- Custom pizza creation using selected ingredients
- Final price calculated automatically

---

### Cart Management
- View cart items
- Increase or decrease item quantity
- Display selected extras clearly
- Total price calculation
- Clear cart functionality
- Pay Now:
  - Clears cart
  - Redirects user to Home page

---

### Navbar Features
- Dynamic cart count
- Hover-based cart preview:
  - Shows only item names and quantities
  - Displays "Cart is empty" message when empty
- Clicking **Add to Cart** button redirects to Cart page
- Profile menu with login/logout options

---

## Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Context API
- Axios
- Bootstrap
- SCSS

### Backend (Microservices)
- Node.js
- Express.js
- MongoDB
- Mongoose
- REST APIs
- CRUD Operations
- bcrypt for password hashing

---

## Microservices Architecture

The backend follows a **microservices architecture**, where each service is independently responsible for a specific feature:

- **User Service**
  - Signup
  - Login
  - Password hashing
- **Pizza Service**
  - Fetch available pizzas
- **Ingredients Service**
  - Fetch ingredients and extras
- **Cart Service**
  - Add, update, and clear cart items

Each microservice exposes REST APIs and communicates independently with the frontend.

---

## Project Workflow

1. User lands on Home page
2. User signs up or logs in
3. User browses available pizzas or builds a custom pizza
4. Pizza and ingredient data fetched from backend services
5. User adds items to cart
6. Cart updates dynamically
7. User views cart and completes order
8. On payment:
   - Cart is cleared
   - User redirected to Home
9. User logs out

---

## Key Concepts Demonstrated
- MERN Stack development
- Microservices architecture
- RESTful API design
- CRUD operations
- Authentication & authorization
- State management using Context API
- Secure password handling
- Modular and scalable project structure

---

## Author

**Hrishita Thopte**
Full Stack MERN Developer
