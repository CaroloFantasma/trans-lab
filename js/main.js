const inputEmail = document.getElementById('exampleInputEmail1');
const inputPassword = document.getElementById('InputPassword').value;
const btn = document.getElementById ('btn');

// Revisar si el correo electrónico es válido

btn.addEventListener('click', () => {
  if (inputEmail === /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/) {
    if (inputPassword === /^[0-9]+$/ || inputPassword.length >= 8) {
      window.open('menu.html');
  } else {
  alert("Ingrese email válido");
  }
}
  })
 
