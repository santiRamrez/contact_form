const btn = document.querySelector("#submit");
const contactForm = document.getElementById("contactForm");

let elName = document.getElementById("name");
let elEmail = document.getElementById("email");
let elMessage = document.getElementById("message");

let myData = [elName, elEmail, elMessage];

let username, email, message;

myData.forEach((data) => {
  data.addEventListener("keyup", function () {
    username = elName.value;
    email = elEmail.value;
    message = elMessage.value;
  });
});

function postData(e) {
  e.preventDefault(); //Don't send the data when the page has loaded

  var data = {
    name: username,
    email: email,
    message: message,
  };

  var jsonContactForm = JSON.stringify(data);
  var params = "data=" + jsonContactForm;

  let xhr = new XMLHttpRequest();

  xhr.open("POST", "send_email.php?version=1.1", true);
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

contactForm.addEventListener("submit", postData);
