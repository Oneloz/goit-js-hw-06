/*
const form = document.querySelector('.login-form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
        
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Будь ласка, заповніть усі поля.");
}

    console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}   */

const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password },

    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert('Please fill in all the fields!')
    }
    const user = { email: email.value, password: password.value };
    
    console.log(user)
    event.currentTarget.reset();
} 
