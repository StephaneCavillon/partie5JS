// déclaration des variables
const p = document.getElementsByTagName('p').item(0);
// console.log(p);

window.addEventListener('scroll', function() {
    // console.log('scrollY ' + scrollY);
    // console.log('zoom ' + (scrollY*0.001) + 1);

    // pour que le zoom n'aille pas trop vite, je multiplie le scrollY par 0.05
    // j'ajoute
    document.getElementsByTagName('p').item(0).style.fontSize = ((scrollY*0.001) + 1) + 'em';
});
