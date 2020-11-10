// Déclaration des variables
let i=1;

// Création de la fonction de clonage
function duplic(){
    // Je vais chercher la variable i et je l'incrémente de 1 à chaque appel de la fonction
    i++;

    // Je créé un clone de mon noeud avec tout ce qu'il contient (true)
    const clone = document.getElementById('champ').cloneNode(true);

    // Je place le clone dans le premier item du fieldset
    document.getElementsByTagName('fieldset').item(0).appendChild (clone);

    // Je change l'id des clones créé
    //d'abord j'incrémente l'id déjà existante
    clone.id = clone.id + i;
    // je remplace le placeholder des input
    clone.children.item(0).setAttribute('placeholder','');
    clone.children.item(0).setAttribute('value','');
    clone.children.item(2).setAttribute('placeholder','');
    clone.children.item(2).setAttribute('value','');

};

// //création du Listener
document.getElementById('add').addEventListener('click', function() {
    duplic();
});