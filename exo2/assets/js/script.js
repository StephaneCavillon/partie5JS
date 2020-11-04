//écouter ce qu'il se passe quand on click sur vérification

document.getElementById('check').addEventListener('click', function checking(){
    
    // déclaration des variables avec le contenu des inputs (ne fonctionne pas avec textContent)
    let password = document.getElementById('password').value;
    let passwordConfirm = document.getElementById('passwordConfirm').value;

    if(password === passwordConfirm){
        document.getElementById('password').style.borderColor = 'green';
        document.getElementById('passwordConfirm').style.borderColor = 'green';
    } else { 
        document.getElementById('password').style.borderColor = 'red';
        document.getElementById('passwordConfirm').style.borderColor = 'red';
    }
});
