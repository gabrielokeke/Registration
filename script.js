const form = document.getElementById("reg-form")
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const numero = document.getElementById("numero");
const date = document.getElementById("date");
const motivation = document.getElementById("Motivation");

let nomOK = false;
let prenomOK = false;
let numeroOK = false;
let dateOK = false;
let motivationOK = false;

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('#error-message');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('#error-message');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {

    const nomValue = nom.value.trim();
    const prenomValue = prenom.value.trim(); 
    const numeroValue = numero.value.trim();
    const dateValue = date.value.trim();
    const motivationValue = motivation.value.trim();

    // Nom validation
    if (nomValue === '') {
        setError(nom, 'Entrez votre nom svp');
    } else if (/^[a-zA-Z]+$/.test(nomValue)) {
        nomOK = true;
        setSuccess(nom);
    } else {
        setError(nom, 'Veuillez remplir cette case uniquement avec des lettres');
    }

    // Prénom validation
    if (prenomValue === '') {
        setError(prenom, 'Entrez votre prenom svp');
    } else if (/^[a-zA-Z]+$/.test(prenomValue)) {
        prenomOK = true;
        setSuccess(prenom);
    } else {
        setError(prenom, 'Veuillez remplir cette case uniquement avec des lettres');
    }

    // Numéro validation
    if (numeroValue === '') {
        setError(numero, 'Entrez un numero valide svp');
    } else if (/^01\d{8}$/.test(numeroValue)) {
        numeroOK = true;
        setSuccess(numero);
    } else {
        setError(numero, 'Votre numéro de téléphone doit commencer par 01 et contenir 10 chiffres');
    }

    // Motivation validation
    if (motivationValue.length >= 1000 && motivationValue.length <= 2500) {
        motivationOK = true;
        setSuccess(motivation);
    } else {
        setError(motivation, 'Votre motivation doit contenir un minimum de 1000 lettres et un maximum de 2500');
    }

    // Date validation 
    const dateInput = new Date(date.value);    
    const now = new Date();
    let age = now.getFullYear() - dateInput.getFullYear();

    if (now.getMonth() < dateInput.getMonth() || (now.getMonth() === dateInput.getMonth() && now.getDate() < dateInput.getDate())) {
        age--;
    }

    if (age >= 18) {
        dateOK = true;
        setSuccess(date);
    } else {
        setError(date, 'Vous devez avoir au moins 18 ans pour vous inscrire');
    }

    // Recapitulatif
    if (nomOK && prenomOK && dateOK && motivationOK && numeroOK) {
        // Montrer le recap
        document.getElementById("checknom").textContent = nomValue;
        document.getElementById("checkprenom").textContent = prenomValue;
        document.getElementById("checkdate").textContent = dateValue;
        document.getElementById("checknumero").textContent = numeroValue;
        document.getElementById("checkmotivation").textContent = motivationValue;
    
        // Montrer le recap avec une transition 
        document.getElementById("check").classList.add("showCheck");
    }
};


