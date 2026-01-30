📌 Project Overview

This project is a React-based landing page application with Sign Up and Sign In authentication, including a “Remember Me” feature.
The goal of the project is to demonstrate React fundamentals, authentication flow, routing, state management, and responsive UI design following front-end best practices.

The application is built as a Single Page Application (SPA) and uses a Node.js + Express backend for authentication.

✨ Features Implemented
🔐 Authentication

User Sign Up with input validation
User Sign In using email and password

Remember Me option to persist login across sessions

Secure password handling on backend

Logout functionality to clear authentication state

🧭 Routing & Access Control

Protected Landing Page (accessible only to authenticated users)

Redirect unauthenticated users to Sign In page

Redirect users after Sign Up / Sign In based on authentication state

🎨 User Interface

Modern Hero section with CTA buttons

Features section and footer

Dark / Light theme toggle

Smooth hover effects and transitions

Fully responsive design (desktop, tablet, mobile)

🧠 Code & Architecture

Clean folder structure

State management using React Context API

Reusable protected route component

Separate CSS files for better maintainability

🛠️ Technologies Used
Frontend

React (Vite)

React Router DOM

Context API (state management)

CSS3 (custom styling, responsive design)

LocalStorage (Remember Me & theme persistence)

Backend

Node.js

Express.js

MongoDB

Mongoose

bcryptjs (password hashing)

jsonwebtoken (JWT) (authentication)


▶️ How to Run the Project

1️⃣ Clone the Repository
git clone <repository-url>

2️⃣ Run Backend Server
cd backend
npm install
npm run dev

3️⃣ Run Frontend Application
cd frontend
npm install
npm run dev


The app will be available at:

http://localhost:5173

🔄 Application Flow

New users Sign Up → Redirected to Landing Page

Returning users Sign In → Redirected to Landing Page

Logged-in users can Log Out → Redirected to Sign In page

Users cannot access Landing Page without authentication

📱 Responsive Design

The UI is fully responsive and optimized for:

Desktop

Tablet

Mobile devices

Responsiveness is handled using CSS media queries, without external UI libraries.

🌙 Dark / Light Theme

Users can toggle between Dark Mode and Light Mode

Theme preference is saved and persisted across sessions

✅ Conclusion

This project demonstrates:

Real-world authentication flow

Clean React architecture

Secure backend integration

Responsive and user-friendly UI
