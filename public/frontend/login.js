// Toggling the visibility of the password
const eye = document.getElementById('eye');
let state = false;

function toggle() {
    const passwordField = document.getElementById('password');
    
    if (state) {
        passwordField.setAttribute('type', 'password');
        eye.style.color = '#7a797e';
        state = false;
    } else {
        passwordField.setAttribute('type', 'text');
        eye.style.color = '#FFFFFF';
        state = true;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    // Handling the login function
    const login = document.getElementById('login');

    function loginFunc() {
        login.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Now on Home Page...");

            console.log("Navigating to: ../UniApplyBot/index.html");

            location.href = "../UniApplyBot/index.html";
        });
    }
    loginFunc();
});


