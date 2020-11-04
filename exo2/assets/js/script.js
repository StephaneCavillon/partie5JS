//écouter ce qu'il se passe quand on click sur vérification

document.getElementById('check').addEventListener('click', function checking(){
    
    // déclaration des variables avec le contenu des inputs (ne fonctionne pas avec textContent)
    let password = document.getElementById('password').value;
    let passwordConfirm = document.getElementById('passwordConfirm').value;

    // OK par contre rajoute une classe si l'état change et du coup il y a les 2 classes.
    if(password === passwordConfirm){
        document.getElementById('password').classList.add('ifTrue');
        document.getElementById('passwordConfirm').classList.add('ifTrue');
    } else { 
        document.getElementById('password').classList.add('ifFalse');
        document.getElementById('passwordConfirm').classList.add('ifFalse');
    }
});
