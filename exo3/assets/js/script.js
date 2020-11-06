// Déclaration des regex
const regexName = /^[a-z]+$/i;
const regexMail = /[\w\.-]+@{1}[\w-]+\.{1}\w{2,10}/;
const regexAge = /\d{1,3}/; 

//création des fonctions de validation

//Pour le Nom
const validName = function (inputName){
    
    // On teste la regex
    if(regexName.test(inputName.value)){
        document.getElementById('valideName').innerHTML = 'Nom Valide';
        document.getElementById('valideName').style.color = 'green';
    } else {
        document.getElementById('valideName').innerHTML = 'Nom Non Valide';
        document.getElementById('valideName').style.color = 'red';
    }
};

//Pour le mail
const validEMail = function (inputEmail){

    // On teste la regex
    if(regexMail.test(inputEmail.value)){
        document.getElementById('valideMail').innerHTML = 'Email Valide';
        document.getElementById('valideMail').style.color = 'green';
    } else {
        document.getElementById('valideMail').innerHTML = 'Email Non Valide';
        document.getElementById('valideMail').style.color = 'red';
    }
};


// Pour l'age
const validAge = function (inputAge){

    // On teste la regex
    if(regexAge.test(inputAge.value)){
        document.getElementById('valideAge').innerHTML = 'Age Valide';
        document.getElementById('valideAge').style.color = 'green';
    } else {
        document.getElementById('valideAge').innerHTML = 'Age Non Valide';
        document.getElementById('valideAge').style.color = 'red';
    }
};

// Création des listeners
// Le fait de mettre this dans la fonction fait appel à l'element sur lequel on a posé le listener
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
