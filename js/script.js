const form = document.getElementById('ping-form');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const formFields = form.children;
  const emailInput = formFields[0];
  const emailValue = formFields[0].value;
  const errorMsg = formFields[1];
  


  if(validateEmail(emailValue) ){
    
    errorMsg.removeAttribute('hidden');
    errorMsg.innerHTML = `Thank you for subscribing!`;
    errorMsg.setAttribute('class', 'subscribeAlert');
    emailInput.removeAttribute('class', 'red');
    emailInput.setAttribute('class', 'green');

    setTimeout(function(){
      errorMsg.innerHTML = "";
      errorMsg.removeAttribute('class', 'subscribeAlert');
      errorMsg.setAttribute('class', 'error');
      emailInput.value = "";
      emailInput.removeAttribute('class', 'green');
      emailInput.focus();

     }, 3000);

  }else{

    if(emailValue ===""){
      errorMsg.innerHTML = 'Email field cannot be blank!'
    } else{
      errorMsg.innerHTML = "Please provide a valid email address";
    }
    emailInput.setAttribute('class', 'red');
    errorMsg.removeAttribute('hidden'); 
    emailInput.focus();

  }

});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}