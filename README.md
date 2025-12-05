---
# 📂 React Auth Forms

A simple and clean **React + Node.js + MongoDB authentication system** where users can **signup, login, and receive JWT tokens**. The frontend communicates with the backend API via **Axios**.

---

## 📸 Screenshots

### **Signup Page**

📷 [Signup Page](./screenshots/SignuUp.png)

### **Signup Page success**

📷 [Signup Page](./screenshots/SignuUpDone.png)

### **Login Page**

📷 [Login Page](./screenshots/Login.png)

### **Success**

📷 [Success](./screenshots/SuccessLogin.png)

### **MongoDB**

📷 [MongoDB](./screenshots/MongoDB.png)

### **Error**

📷 [Error](./screenshots/ErrorMessage.png)

---

## ⭐ Features

* User signup with validation (email, password, phone number)
* User login with JWT authentication
* Error messages for invalid credentials or duplicate email
* Redirect after successful signup/login
* Clean React UI with responsive forms
* Axios for API communication
* Node.js + Express backend with MongoDB
* Passwords hashed with bcrypt
* Environment variable setup

---

## 🛠 Technologies

**Frontend:** React, Axios, React Router, CSS
**Backend:** Node.js, Express.js, MongoDB, Mongoose, bcrypt, JWT
**Other:** Nodemon, dotenv, cors

---

## 📁 Folder Structure

```
react-auth-forms/
│
├── backend/
│   ├── config/db.js  
│   ├── models/User.js           
│   ├── routes/authRoutes.js    
│   ├── controllers/authController.js  
│   ├── middlewares/errorHandler.js 
│   ├── server.js             
│   └── .env                    
│
└── frontend/
    ├── src/
    │   ├── components/Signup.jsx
    │   ├── components/Login.jsx
    │   ├── style/Form.css
    │   ├── App.js
    │   └── index.js
    ├── public/
    └── .env                     # Frontend environment variables
```

---

## 🚀 Installation Guide

### 1️⃣ Frontend Setup

```bash
npx create-react-app frontend
cd frontend
npm install axios react-router-dom
npm start
```

Frontend runs at: **[http://localhost:3000](http://localhost:3000)**

---

### 2️⃣ Backend Setup

1. Create and enter the backend folder:

```bash
mkdir backend
cd backend
```

2. Initialize Node.js project:

```bash
npm init -y
```

3. Install backend dependencies:

```bash
npm install express mongoose bcryptjs jsonwebtoken dotenv cors nodemon
```

4. Add a `dev` script in `package.json`:

```json
"scripts": {
  "dev": "nodemon server.js"
}
```

5. Create `.env` file in backend:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/reactauth
JWT_SECRET=your_secret_key
```

6. Start the backend server:

```bash
npm run dev
```

Backend runs at: **[http://localhost:5000](http://localhost:5000)**

---

## 🔗 API Endpoints

| Method | Endpoint           | Description          |
| ------ | ------------------ | -------------------- |
| POST   | `/api/auth/signup` | Register new user    |
| POST   | `/api/auth/login`  | Login user & get JWT |

---

## 📜 Form Validation Rules

* **Name:** Required
* **Email:** Valid Gmail format
* **Password:** Min 6 characters
* **Phone:** 10 digits only
* **Address:** Required

> Invalid input will show **error messages** on the frontend popup.

---

## 🧠 What You Will Learn

* Structuring a React + Node.js project
* JWT-based authentication
* Password hashing with bcrypt
* API communication with Axios
* Form validation and error handling
* MongoDB + Mongoose setup
* Environment variable management

---



