const form = document.getElementById("reg-form")
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const numero = document.getElementById("numero");
const date = document.getElementById("date");
const motivation = document.getElementById("Motivation");

let nomOK = false;
let prenomOK = false;
let numeroOK = false;
let dateOK=false;
let motivationOK=false;

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('#error-message');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('#error-message');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
};

const validateInputs = () => {

    const nomValue = nom.value.trim();
    const prenomValue = prenom.value.trim(); 
    const numeroValue = numero.value.trim();
    const dateValue = date.value.trim();
    const motivationValue = motivation.value.trim();

    if (nomValue === '') {
        setError(nom, 'Entrez votre nom svp')
    } else if (/[[a-zA-Z]]/.test(nom)) {
        nomOK = true;
        setSuccess(nom)
    } else {
        setError(nom, 'Veuillez remplir cette case uniquement avec des lettres')
    }

    if (prenomValue === '') {
        setError(prenom, 'Entrez votre prenom svp')
    } else if (/[a-zA-Z]/.test(prenom)) {
        prenomOK = true;
        setSuccess(prenom)
    } else {
        setError(prenom, 'Veuillez remplir cette case uniquement avec des lettres')
    }
    if (numeroValue === '') {
        setError(numero, 'Entrez un numero valide svp')
    } else if (numeroValue.length === 10) {
        setSuccess(numero)
    } if (/^01\d{8}$/.test(numero)) {
        numeroOK = true;
        setSuccess(numero)
    } else {
        setError(numero, 'Votre numéro de téléphone doit commencer par 01 et contenir 10 chiffres')
    }

     if (motivationValue.length >= 1000  && motivationValue.length <= 2500) {
        motivationOK = true
        setSuccess(motivation)
    } else {
        setError(motivation, 'Votre motivation doit contenir un minimum de 1000 lettres et un maximum de 2500')
    }

    const dateInput = new Date(date.value);    

    const now = new Date();

    const age = now.getFullYear() - dateInput.getFullYear();

    if (now.getMonth() < dateInput.getMonth() || (now.getMonth() === dateInput.getMonth() && now.getDate() < dateInput.getDate())) {
        age--
    } if (age > 18) {
        dateOK = true;
        setSuccess(date)
    } else {
        setError(date, 'Vous devez avoir au moins 18 ans pour vous inscrire')
    }

} 

    

