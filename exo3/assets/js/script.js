// Déclaration des regex
//nom ajouter les caractères spéciaux, penser aux délimteurs
const regexName = /^[a-z-]+$/i;
const regexMail = /^[\w\.-]+@[\w-]+\.\w{2,10}$/;
const regexAge = /^\d{1,3}$/; 

//création des fonctions de validation

//Pour le Nom
const validName = function (inputName){
   let validMessage = document.getElementById('valideName');
    
    // On teste la regex
    if(regexName.test(inputName.value)){
        validMessage.innerHTML = 'Nom Valide';
        validMessage.style.color = 'green';
    } else {
        validMessage.innerHTML = 'Nom Non Valide';
        validMessage.style.color = 'red';
    }
};

//Pour le mail
const validEMail = function (inputEmail){
    let validMessage = document.getElementById('valideMail');

    // On teste la regex
    if(regexMail.test(inputEmail.value)){
        validMessage.innerHTML = 'Email Valide';
        validMessage.style.color = 'green';
    } else {
        validMessage.innerHTML = 'Email Non Valide';
        validMessage.style.color = 'red';
    }
};


// Pour l'age
const validAge = function (inputAge){
    let validMessage = document.getElementById('valideAge');

    // On teste la regex
    if(regexAge.test(inputAge.value)){
        validMessage.innerHTML = 'Age Valide';
        validMessage.style.color = 'green';
    } else {
        validMessage.innerHTML = 'Age Non Valide';
        validMessage.style.color = 'red';
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
