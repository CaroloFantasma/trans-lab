const inputEmail = document.getElementById('exampleInputEmail1');
const inputPassword = document.getElementById('InputPassword').value;
const btn = document.getElementById ('btn');
 

  btn.addEventListener('click', () => {
    if (inputPassword === /^[0-9]+$/ || inputPassword.length <= 8 ) {
    window.open('menu.html');
    } else {
    document.getElementById('wrong').innerHTML= 'Excede el número de digitos.';
    }
    });