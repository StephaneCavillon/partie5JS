// déclaration des accès aux éléments
const img = document.getElementsByTagName('img').item(0);


// déclaration des évènements
img.addEventListener('click', function (){
    srcChange(this);
});

img.addEventListener('mouseover', function (){
    imgZoom(this);
});

img.addEventListener('mouseleave', function(){
    imgDezoom(this);
});

//déclaration des fonctions

//changement de l'image au clic
const srcChange = function (element){
    //récupération de la valeur de l'attribut source de l'element
    let srcValue = element.getAttribute('src');

    //condition en fonction de l'image affiché
    if(srcValue == 'assets/img/tasseCafe.jpg'){
        srcValue = 'assets/img/cafetiere.jpg';
    } else {
        srcValue = 'assets/img/tasseCafe.jpg';
    };

    // changement de l'image
    element.setAttribute('src', srcValue);
};

//zoom sur l'image

const imgZoom = function (element){
    // //récuperation de la taille
    // let widthValue = element.getAttribute('width');

    //zoom de l'image
    let zoom = element.getAttribute('width') * 1.25;

    //réattribution de la nouvelle width
    element.setAttribute('width', zoom);

    // //alternative avec le style
    // element.style.width = '100%';
};

const imgDezoom = function (element){
    // //récuperation de la taille
    // let widthValue = element.getAttribute('width');

    //zoom de l'image
    let zoom = element.getAttribute('width') / 1.25;

    //réattribution de la nouvelle width
    element.setAttribute('width', zoom);

    // //alternative avec le style
    // element.style.width = '80%';
};