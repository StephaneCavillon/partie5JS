// // Déclaration des variables
// // avec querySelector on selectionne tout les noeuds qui contiennent des inputs
// let formInput = document.querySelectorAll('input');

// Déclaration des listeners
// forEach permet d'appliquer le listener sur tout les items du querySelector
document.querySelectorAll('input').forEach(item=> { 
    item.addEventListener('focus', function(){
        this.classList.add('onFocus');
    });
});



document.querySelectorAll('input').forEach(item=>{
    item.addEventListener('blur',function(){
        this.classList.remove('onFocus');
    });
});

