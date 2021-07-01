const btn = document.querySelector("#submit");
const contactForm = document.getElementById("contactForm");

let elName = document.getElementById("name");
let elEmail = document.getElementById("email");
let elMessage = document.getElementById("message");

let myData = [elName, elEmail, elMessage];

let username, email, message;

//get the values of each input
myData.forEach((data) => {
  data.addEventListener("keyup", function () {
    //Format username
    username = formatName(elName.value).trim();
    email = elEmail.value.toLowerCase();
    message = elMessage.value;
  });
});

//render the ideal format of the inputs name and email to the users
myData.forEach((data) => {
  data.addEventListener("focusout", function () {
    elName.value = "";
    elName.value = username;

    elEmail.value = "";
    elEmail.value = email;
  });
});

function postUserDataToMyEmail(e) {
  e.preventDefault(); //Don't send the data when the page has loaded

  var data = {
    name: username,
    email: email,
    message: message,
  };

  var jsonContactForm = JSON.stringify(data);
  var params = "data=" + jsonContactForm;

  let xhr = new XMLHttpRequest();

  xhr.open("POST", "./send_email.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
    } else if (this.status == 404) {
      console.log("No lo lograste bebe");
    }
  };
  xhr.send(params);
}

function postEmailToSendResponse(e) {
  e.preventDefault(); //Don't send the data when the page has loaded

  userEmail = email;
  var params = "data=" + email;

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "send_email_to_user.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
    } else if (this.status == 404) {
      console.log("No lo lograste bebe");
    }
  };
  xhr.send(params);
}

/*
contactForm.addEventListener("submit", postUserDataToMyEmail);
contactForm.addEventListener("submit", postEmailToSendResponse);*/
