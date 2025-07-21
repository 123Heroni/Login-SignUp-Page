    // Form toggle functionality
    function showLogin() {
        document.getElementById('loginForm').classList.add('active');
        document.getElementById('signupForm').classList.remove('active');
        document.querySelector('.toggle-btn:first-child').classList.add('active');
        document.querySelector('.toggle-btn:last-child').classList.remove('active');
        clearMessages();
    }

    function showSignup() {
        document.getElementById('signupForm').classList.add('active');
        document.getElementById('loginForm').classList.remove('active');
        document.querySelector('.toggle-btn:last-child').classList.add('active');
        document.querySelector('.toggle-btn:first-child').classList.remove('active');
        clearMessages();
    }
    // Clear all error and success messages
    function clearMessages() {
        const messages = document.querySelectorAll('.error-message, .success-message');
        messages.forEach(msg => {
            msg.style.display = 'none';
            msg.textContent = '';
        });
    }
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    // Password strength checker
    function checkPasswordStrength(password) {
        const strengthBar = document.getElementById('passwordStrengthBar');
        let strength = 0;

        if (password.length >= 8) strength += 1;
        if (password.match(/[a-z]/)) strength += 1;
        if (password.match(/[A-Z]/)) strength += 1;
        if (password.match(/[0-9]/)) strength += 1;
        if (password.match(/[^a-zA-Z0-9]/)) strength += 1;
        strengthBar.style.width = (strength * 20) + '%';

        if (strength <= 2) {
            strengthBar.className = 'password-strength-bar strength-weak';
        } else if (strength <= 4) {
            strengthBar.className = 'password-strength-bar strength-medium';
        } else {
            strengthBar.className = 'password-strength-bar strength-strong';
        }
    }
    // Check password match
    function checkPasswordMatch() {
        const passwords = document.querySelectorAll('#signupForm input[type="password"]');
        const password = passwords[0].value;
        const confirmPassword = passwords[1].value;
        const errorElement = document.getElementById('confirmPasswordError');

        if (confirmPassword && password !== confirmPassword) {
            errorElement.textContent = 'Passwords do not match';
            errorElement.style.display = 'block';
            return false;
        } else {
            errorElement.style.display = 'none';
            return true;
        }
    }

    // Handle login form submission
    function handleLogin(event) {
        event.preventDefault();
        clearMessages();

        const email = event.target.querySelector('input[type="email"]').value;
        const password = event.target.querySelector('input[type="password"]').value;

        let isValid = true;

        // Email validation
        if (!isValidEmail(email)) {
            document.getElementById('loginEmailError').textContent = 'Please enter a valid email address';
            document.getElementById('loginEmailError').style.display = 'block';
            isValid = false;
        }

        // Password validation
        if (password.length < 6) {
            document.getElementById('loginPasswordError').textContent = 'Password must be at least 6 characters';
            document.getElementById('loginPasswordError').style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            // Simulate login success
            document.getElementById('loginSuccess').textContent = 'Login successful! Welcome back!';
            document.getElementById('loginSuccess').style.display = 'block';

            // Reset form after 2 seconds
            setTimeout(() => {
                event.target.reset();
                clearMessages();
            }, 2000);
        }
    }
    // Handle signup form submission
    function handleSignup(event) {
        event.preventDefault();
        clearMessages();

        const username = event.target.querySelector('input[type="text"]').value;
        const email = event.target.querySelector('input[type="email"]').value;
        const password = event.target.querySelector('input[type="password"]').value;
        const confirmPassword = event.target.querySelector('input[type="password"]:last-of-type').value;

        let isValid = true;

        // Username validation
        if (username.length < 3) {
            document.getElementById('signupUsernameError').textContent = 'Username must be at least 3 characters';
            document.getElementById('signupUsernameError').style.display = 'block';
            isValid = false;
        }

        // Email validation
        if (!isValidEmail(email)) {
            document.getElementById('signupEmailError').textContent = 'Please enter a valid email address';
            document.getElementById('signupEmailError').style.display = 'block';
            isValid = false;
        }

        // Password validation
        if (password.length < 8) {
            document.getElementById('signupPasswordError').textContent = 'Password must be at least 8 characters';
            document.getElementById('signupPasswordError').style.display = 'block';
            isValid = false;
        }

        // Confirm password validation
        if (password !== confirmPassword) {
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
            document.getElementById('confirmPasswordError').style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            // Simulate signup success
            document.getElementById('signupSuccess').textContent = 'Account created successfully! Welcome!';
            document.getElementById('signupSuccess').style.display = 'block';

            // Reset form after 2 seconds
            setTimeout(() => {
                event.target.reset();
                clearMessages();
                document.getElementById('passwordStrengthBar').style.width = '0%';
                showLogin();
            }, 2000);
        }
    }

    function showAlert(message) {
        document.getElementById('alertMessage').textContent = message;
        document.getElementById('customAlert').style.display = 'flex';
    }

    function closeAlert() {
        document.getElementById('customAlert').style.display = 'none';
    }
    // Show forgot password (placeholder)
    function showForgotPassword() {
        showAlert("Forgot password functionality would be implemented here by Backend.");
    }

    // Add smooth animations to inputs
    document.addEventListener('DOMContentLoaded', function() {
        const inputs = document.querySelectorAll('.form-input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.transform = 'translateY(-2px)';
            });

            input.addEventListener('blur', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    });