const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const closecross = document.querySelector('.icon-close');
const closecrosscon = document.querySelector('.icon-close-con');
const contact = document.querySelector('.Contact');
const btnContact = document.querySelector('.btnContact');

btnContact.addEventListener('click', () => {
    contact.classList.add('cont-form');

});

closecrosscon.addEventListener('click', () => {
    contact.classList.remove('cont-form');

});


registerLink.addEventListener('click', () => {
    wrapper.classList.add('login-form');
    wrapper.classList.remove('register-form');

});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('login-form');
    wrapper.classList.add('register-form');

});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');

});

closecross.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');


});



const shownpass = document.getElementById('shownpass');
const loginPassword = document.getElementById('loginPassword');

const hiddenpass = document.getElementById('hiddenpass');

shownpass.addEventListener('click', () => 
    {
    shownpass.classList.add("hidden")
    hiddenpass.classList.remove("hidden")
    loginPassword.type = 'text';
});

hiddenpass.addEventListener('click', () => 
    {
    shownpass.classList.remove("hidden")
    hiddenpass.classList.add("hidden")
    loginPassword.type = 'password';
});




const shownpassR = document.getElementById('shownpassR');
const loginPasswordR = document.getElementById('loginPasswordR');

const hiddenpassR = document.getElementById('hiddenpassR');

shownpassR.addEventListener('click', () => 
    {
    shownpassR.classList.add("hidden")
    hiddenpassR.classList.remove("hidden")
    loginPasswordR.type = 'text';
});

hiddenpassR.addEventListener('click', () => 
    {
    shownpassR.classList.remove("hidden")
    hiddenpassR.classList.add("hidden")
    loginPasswordR.type = 'password';
});


/*const registerPassword = document.getElementById('registerPasswordR');*/