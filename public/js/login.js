const { blog } = require("../../controllers");

//Login validation
const loginFormHandler = async (event) => {
    event.preventDefault();

const username = $("#login_username").value.trim();
const password = $("#login_password").value.trim();

const checkLogin = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers: {
        'Content-Type': 'application/JSON'
    }
});

if(checkLogin.ok) {
    document.location.replace('/dashboard')
}
else {
    alert('Login failed')
}
}

document.getElementById("login-form").addEventListener('submit', loginFormHandler)


//Signup Validation
const signupFormHandler = async (event) => {
    event.preventDefault();

const usernameNew = $("#signup_username").value.trim();
const passwordNew = $("#signup_password").value.trim();

const checkSignup = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({usernameNew, passwordNew}),
    headers: {
        'Content-Type': 'application/JSON'
    }
});

if(checkSignup.ok) {
    document.location.replace('/dashboard')
}
else {
    alert('Signup failed')
}
}

document.getElementById("signup-form").addEventListener('submit', loginFormHandler)