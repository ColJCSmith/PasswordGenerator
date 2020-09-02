//This var prompt captures the desired password length.  It is used in the password generator later.  The while loop runs until the user chooses a number in the correct 8-128 range.
do {
var passwordLength = prompt("Choose the number of digits in your password between 8-128");
if (passwordLength < 7) {
  alert("Password is too short");
  }
if (passwordLength > 128) {
  alert("Password is too long");
  }
}
while (passwordLength < 8 || passwordLength > 128)

//These vars allow the user to choose which types of character, from the var list above, they want to include in their password.  Each var selected in concatonated onto the string for the generator to use.
do {
  var UpperCase = confirm("Do you want your password to include upper case letters?");
  var LowerCase = confirm("Do you want your password to include lower case letters?");
  var Numbers = confirm("Do you want you password to incude numbers?");
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
if (UpperCase == false && LowerCase == false && Numbers == false && Special == false) {
  alert("Your password must contain at lest one set of characters")
}
}
while (UpperCase == false && LowerCase == false && Numbers == false && Special == false)
console.log(digits);

function writePassword() { 
  let password = ''; 
    for (let i = 0; i < passwordLength; i++ ) { 
        password += digits[Math.floor(Math.random() * digits.length)];
    } 
    return password; 
}
  var passwordText = document.querySelector("#password");
  passwordText.value = writePassword();

  var generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", writePassword());

