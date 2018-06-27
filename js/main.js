const inputEmail = document.getElementById('exampleInputEmail1').value;
const inputPassword = document.getElementById('InputPassword');
const btn = document.getElementById ('btn');

 

  function validatePassword(){
    if(inputPassword.value != /^[0-9]+$/) {
      contraseña.setCustomValidity("Passwords Don't Match");
    } else {
      contraseña.setCustomValidity('');
    }
  }
  
  inputPassword.onchange = validatePassword;
  contraseña.onkeyup = validatePassword;