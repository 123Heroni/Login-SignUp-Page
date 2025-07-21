# 🔐 Simple Login & Signup Form (HTML, CSS, JavaScript)

A lightweight and beginner-friendly authentication interface built with pure HTML, CSS, and JavaScript. This project includes a **Sign-Up** and **Login** form with input validation, password strength checking, and dynamic form switching — all without using any external libraries or frameworks.

🌐 **Live Preview:** [View it here](https://your-username.github.io/your-repo-name)

## 🚀 Features

- Toggle between **Login** and **Signup** forms
- Real-time **password strength indicator**
- Clear **error messages** for invalid input
- Basic **form validation**:
  - Minimum username and password length
  - Email format check
  - Password match check
- Success message after signup
- Auto-redirect to login form after valid signup


## 📁 Project Structure

Login-SignUp Folder/
│
├── index.html # Main HTML file containing both forms
├── style.css # All styling for layout, transitions, and responsiveness
└── script.js # JavaScript handles form logic, validation, and DOM updates


## 🛠️ How It Works

### 🔁 Form Switching  
Clicking “Sign Up” or “Login” toggles the visible form using CSS classes and DOM manipulation.

### 🔒 Input Validation  
Each form checks for:
- **Username:** Minimum 3 characters  
- **Email:** Must follow valid format  
- **Password:** Minimum 8 characters  
- **Confirm Password:** Must match the password

### 📶 Password Strength  
The password strength bar reflects:
- Length  
- Use of numbers  
- Special characters  
- Capital letters  

### 🔁 Auto-Redirect  
After successful signup, user is redirected back to the login form automatically.


## ✅ How to Use

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Use the interface to test the login and signup logic.

> ⚠️ **Note:** This is a **frontend-only** project. No real authentication or backend connection.


## 🧠 Concepts Covered

- DOM manipulation
- JavaScript event handling
- Input validation
- Password strength algorithm
- CSS form transitions
- Use of `preventDefault()` in forms


## 📌 Disclaimer

This project is intended **for educational purposes only**. It is **not production-ready** because:
- No real database or authentication is used
- No secure encryption or hashing
- No server integration

To make it production-ready:
- Integrate with a backend (Node.js, Django, PHP, etc.)
- Securely store and hash passwords
- Implement proper session/token management
- 

## 📷 Preview

![Form Preview](https://github.com/123Heroni/Login-SignUp-Page/blob/main/Screenshot%202025-07-21%20122306.png)


## 📄 License

This project is licensed under the [MIT License](LICENSE).

