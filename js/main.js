const inputEmail = document.getElementById('exampleInputEmail1').value;
const inputPassword = document.getElementById('exampleInputPassword1').value;
const btn = document.getElementById ('btn');

 
let validate = () => {
  if (inputPassword === NaN){
    inputPassword.innerHTML="Enter numeric value only";
    return false;
  }else{
    return true;
    }
  }