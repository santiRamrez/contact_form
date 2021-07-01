// btn and contactForm were delcared at ajaxToPhp.js
// name - email - message were declared at ajaxToPhp.js

function formatName(theName) {
  arr = theName.toLowerCase().split(" ");
  str = "";
  arr.forEach((word) => {
    str += word.substr(0, 1).toUpperCase() + word.substr(1) + " ";
  });

  return str;
}

const myRegex = {
  name: /^[a-z]+\s?[a-z]*/i,
  email: /^[a-z]+[_\.]*\d*[\w\.]*@\w+\.[a-z]{2,3}$/,
};

let regexAttack = /<[a-z]/;

function validateData() {
  // It is true if the conditions of the regular expressions are truthy.
  let testName = myRegex.name.test(username);
  let testEmail = myRegex.email.test(email);
  let testAttack = false;

  if (testEmail == false) {
    console.log("Use an email with JUST ONE .com");
  }

  if (
    regexAttack.test(username) ||
    regexAttack.test(email) ||
    regexAttack.test(message)
  ) {
    testAttack = true;
    console.log("Fuck You");
    //Show message to say fuck you!
    return;
  }

  if (testName && testEmail && testAttack == false) {
    console.log("Enviar datos");
    /*
      contactForm.addEventListener("submit", postUserDataToMyEmail);
      contactForm.addEventListener("submit", postEmailToSendResponse);*/
  } else {
    console.log("La tascaaa ...gando");
  }
}

let button = document.getElementById("btnSendForm");

button.addEventListener("click", validateData);
contactForm.addEventListener("submit", validateData);
