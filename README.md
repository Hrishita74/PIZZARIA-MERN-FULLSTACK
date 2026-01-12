# PIZZARIA – MERN Full Stack Pizza Ordering Application

A full-stack pizza ordering web application built using the MERN stack with a microservices-based backend architecture.  
Users can order pizzas, customize ingredients, manage cart, and authenticate securely.

---

##  Features

###  User Authentication
- Signup & Login using **username and password**
- Validations for empty fields and incorrect credentials
- Login success / error handled via UI popups
- Authentication state maintained using **Context API + localStorage**
- Conditional navbar rendering (Login/Signup → Logout)

---

###  Order Pizza
- Fetch pizza data from backend
- Add pizzas to cart
- Customize pizzas with extra ingredients
- Dynamic price calculation
- Popup-based customization

---

###  Build Your Own Pizza
- Select ingredients from database
- Base price ₹200 + selected ingredients
- Popup confirmation before adding to cart
- Custom pizza named using logged-in username  
  (e.g. *Hrishita’s Delicious Treat*)

---

###  Cart Management
- View all cart items
- Quantity increment / decrement
- Extras displayed clearly
- Total amount calculation
- Clear cart
- Pay Now → clears cart and redirects to Home

---

##  Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Context API
- Bootstrap + SCSS
- Axios

### Backend (Microservices)
- Node.js
- Express.js
- MongoDB
- Mongoose
- REST APIs
- CRUD Operations

---

##  Microservices Architecture

The backend is divided into independent services:

- User Service → Authentication
- Pizza Service → Pizza data
- Ingredients Service → Ingredients & extras
- Cart Service → Cart operations

Each service runs independently and communicates via REST APIs.

---

##  Project Workflow

1. User on Home Page
2.  User signs up / logs in
3. User browses pizzas or builds custom pizza
4. When clicked on Logo, User directed to Home Page
5. Ingredients and prices fetched from backend
6. User adds items to cart
7. Cart updates dynamically
8. User completes order (Pay Now)
9. User Logs out

---

## Functionality

This project demonstrates a complete MERN stack application using microservices architecture, CRUD operations, authentication, state management and real-time UI updates.”

---

##AUTHOR

HRISHITA :)
