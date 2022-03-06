document.getElementById('username').addEventListener('blur', checkInput);
//button
const btn = document.querySelector("button");
btn.setAttribute("disabled", "disabled");
document
  .getElementById("regForm")
  .addEventListener("change", (event) => {
    const formIsFilled = array.form(document.querySelectorAll("input"));
    if (formIsFilled) {
      btn.removeAttribute("disabled");
    } else {
      btn.setAttribute("disabled", "disabled");
    }
  });

 document.getElementById("submit").addEventListener("submit", (event) => {
  event.preventDefault();
  const alert = document.createElement("div");
  alert.classList.add("alert", "alert-success");
  alert.innerText = "Successful user registration.";
  form.prepend(alert);
});



var uname = document.registration.username;
var uemail = document.registration.email;

if(allLetter(uname))
{
if(ValidateEmail(uemail))
{
}
}
return false;
}

function allLetter(uname)
{
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}

function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}

var $form = $('.decor');

$form.on('submit', function (e) {
  e.preventDefault();
  alert("SUBMITTED!");
});
