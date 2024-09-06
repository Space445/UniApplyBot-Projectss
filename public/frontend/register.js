// Toggling the visibility of the password
const eyeBtn = document.getElementById('eye2');
let state = false;

function toggle() {
    const passwordField = document.getElementById('password2');
    
    if (state) {
        passwordField.setAttribute('type', 'password');
        eyeBtn.style.color = '#7a797e';
        state = false;
    } else {
        passwordField.setAttribute('type', 'text');
        eyeBtn.style.color = '#d23e3e';
        state = true;
    }
}


document.addEventListener('DOMContentLoaded', function() {

    //handling the login function
    const registerBtn = document.getElementById('register');

    function RegisterFunc() {
        registerBtn.addEventListener('click', (e) => {
            e.preventDefault();

            alert("Now on the login...");
            location.href = './login.html'
        })
    }
    RegisterFunc();
})