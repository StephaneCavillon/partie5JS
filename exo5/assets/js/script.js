
// Déclaration des boutons
const text = document.getElementsByTagName('p').item(0);
const pink = document.getElementsByTagName('button').item(0);
const blue = document.getElementsByTagName('button').item(1);
const purple = document.getElementsByTagName('button').item(2);
const bold = document.getElementsByTagName('button').item(3);
const italic = document.getElementsByTagName('button').item(4);

// console.log(document.getElementsByTagName('button'));

// Déclaration des listeners
pink.addEventListener('click', function(){
    text.style.color = 'pink';
});
blue.addEventListener('click', function(){
    text.style.color = 'blue';
});
purple.addEventListener('click', function(){
    text.style.color = 'purple';
});
bold.addEventListener('click', function(){
    text.style.fontWeight = 'bold';
});
italic.addEventListener('click', function(){
    text.style.fontStyle = 'italic';
});


//tentative d'automatisation de la recherche de bouton
// //déclaration des variables
// let x;

// // condition pour définir l'index des éléments
// switch(color){
//     case 'rose':
//         x=0
//         break;
//     case 'bleu':
//         x=1
//         break;
//     case 'violet':
//         x=1
//         break;
//     case 'gras':
//         x=1
//         break;
//     case 'italique':
//         x=1
//         break;
// };

//     return x;
//     console.log(x);
// };

// console.log(document.getElementsByTagName('button').itemvalue);



