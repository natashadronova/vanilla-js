const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// CMD+D - selecting next instance
// Option + shift + D - copy-paste code below

// Functions

// show error outline
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className += " error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className += " success";
}

// check if email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `${getFieldName(input)} is not valid`);
  }
}

// check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} should be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} should be no more than ${min} characters`
    );
  } else {
    showSuccess(input);
  }
}

// check password length
function checkPasswordsMatch(input1, input2) {
  console.log(input1.value, input2.valuescr);
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

// get field name and uppercase first letter
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Event listeners
form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
