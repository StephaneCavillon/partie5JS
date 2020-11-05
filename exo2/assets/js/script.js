//écouter ce qu'il se passe quand on click sur vérification

document.getElementById('check').addEventListener('click', function checking(){
    
    // déclaration des variables avec le contenu des inputs (ne fonctionne pas avec textContent)
    let password = document.getElementById('password').value;
    let passwordConfirm = document.getElementById('passwordConfirm').value;

    // OK supprime la classe precedente s'il y a déjà eu des tentatives
    if(password === passwordConfirm){
        document.getElementById('password').classList.remove('ifFalse');
        document.getElementById('password').classList.add('ifTrue');
        document.getElementById('passwordConfirm').classList.remove('ifFalse');
        document.getElementById('passwordConfirm').classList.add('ifTrue');
    } else { 
        document.getElementById('password').classList.remove('ifTrue');
        document.getElementById('password').classList.add('ifFalse');
        document.getElementById('passwordConfirm').classList.remove('ifTrue');
        document.getElementById('passwordConfirm').classList.add('ifFalse');
    }
});
