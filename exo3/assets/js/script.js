// Déclaration des regex
const regexName = /[a-z]+/i;
const regexMail = /[\w.-]+@{1}[\w-]+\.{1}\w{2,10}/;
const regexAge = /\d{1,3}/; 

//création des fonctions de validation

//Pour le Nom
const validName = function (inputName){
    // On va chercher la valeur du champ Email
    inputName = document.getElementById('name').value;

    //on verifie que la valeur est conforme à la regex
    let testName = regexName.test(inputName);
    console.log('name ' + inputName);
    console.log('retour regex ' + testName);

    if(testName){
        document.getElementById('valideName').innerHTML = 'Nom Valide';
        document.getElementById('valideName').style.color = 'green';
    } else {
        document.getElementById('valideName').innerHTML = 'Nom Non Valide';
        document.getElementById('valideName').style.color = 'red';
    }
};

//Pour le mail
const validEMail = function (inputEmail){
    // On va chercher la valeur du champ Email
    inputEmail = document.getElementById('mail').value;

    //on verifie que la valeur est conforme à la regex
    let testMail = regexMail.test(inputEmail);
    console.log(inputEmail);
    console.log('retour ' + testMail);

    if(testMail){
        document.getElementById('valideMail').innerHTML = 'Email Valide';
        document.getElementById('valideMail').style.color = 'green';
    } else {
        document.getElementById('valideMail').innerHTML = 'Email Non Valide';
        document.getElementById('valideMail').style.color = 'red';
    }
};


// Pour l'age
const validAge = function (inputAge){
    // On va chercher la valeur du champ Email
    inputAge = document.getElementById('age').value;

    //on verifie que la valeur est conforme à la regex
    let testAge = regexAge.test(inputAge);
    console.log(inputAge);
    console.log( 'retour ' + testAge);

    if(testAge){
        document.getElementById('valideAge').innerHTML = 'Age Valide';
        document.getElementById('valideAge').style.color = 'green';
    } else {
        document.getElementById('valideAge').innerHTML = 'Age Non Valide';
        document.getElementById('valideAge').style.color = 'red';
    }
};

// Création des listeners

//Pour le nom
document.getElementById('name').addEventListener('change',function() {
    validName(this);
});

//pour le mail
document.getElementById('mail').addEventListener('change', function(){
    validEMail(this);
});

// pour l'age
document.getElementById('age').addEventListener('change', function(){
    validAge(this);
});
