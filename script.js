
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function writePassword() {
  //This do while loop runs until the user chooses a number in the correct 8-128 range.
  do {
    //This variable prompt captures the desired password length.  It is used in the password generator later.  
    var passwordLength = prompt("Choose the number of digits in your password between 8-128");
    if (passwordLength < 7) {
      alert("Password is too short");
    }
    if (passwordLength > 128) {
      alert("Password is too long");
    }
  }
  while (passwordLength < 8 || passwordLength > 128);

  //This do while loop concatonates the character types (variables) selected from ArraysList.js onto a string called 'digits', which the generator to select from.
  do {
    //These variables allow the user to choose which types of character (from the variables in ArraysList.js), they want to include in their password.  
    var UpperCase = confirm("Do you want your password to include upper case letters?");
    var LowerCase = confirm("Do you want your password to include lower case letters?");
    var Numbers = confirm("Do you want you password to include numbers?");
    var Special = confirm("Do you want your password to include special characters?");
    if (UpperCase) {
      var digits1 = upperCasedCharacters;
    }
    else {
      var digits1 = '';
    }
    if (LowerCase) {
      var digits2 = digits1.concat(lowerCasedCharacters);
    }
    else {
      var digits2 = digits1;
    }
    if (Numbers) {
      var digits3 = digits2.concat(numericCharacters);
    }
    else {
      var digits3 = digits2;
    }
    if (Special) {
      var digits = digits3.concat(specialCharacters)
    }
    else {
      var digits = digits3;
    }
    //This if statement generates an error if the user doesn't select any characters
    if (UpperCase == false && LowerCase == false && Numbers == false && Special == false) {
      alert("Your password must contain at least one set of characters")
    }
  }
  //This while sends the user back to the beginning of the character selection loop, if nothing is selected.
  while (UpperCase == false && LowerCase == false && Numbers == false && Special == false);

  //This section generates the random string of characters, from the 'digits' string concatonated above.
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    password += digits[Math.floor(Math.random() * digits.length)];
  }
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);