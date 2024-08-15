function passCheck(){
  let x = document.getElementById('passCheck');
  if (x.type ==="password"){
    x.type = "text";
  } else{
    x.type = "password";
  }
}
