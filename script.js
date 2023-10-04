// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!@#$%^&*()';
var result = '';
var characters = "";

// Write password to the #password input
function writePassword(length) {
  //var password = result;
  var passwordText = document.querySelector("#password");
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  passwordText.value = "";
  passwordText.value = result;


}
//Get the generate button to work.
generateBtn.addEventListener("click", function () {
  var length = window.prompt("Please enter the number of characters (8-128)");
  var upperCaseConfirm = window.confirm("Would you like to include upper case letters?");
  var lowerCaseConfirm = window.confirm("Would you like to include lower case letters?");
  var numbersConfirm = window.confirm("Would you like to include numbers?");
  var symbolsConfirm = window.confirm("Would you like to include symbols?");
  characters = "";

  //in case the required fields are not met.
  while (length < 8 || length > 128 || isNaN(length)) {
    alert("Length needs to be between 8-128");
    length = window.prompt("Please enter the number of characters (8-128)");
  }

  while (upperCaseConfirm == false && lowerCaseConfirm == false && numbersConfirm == false && symbolsConfirm == false) {
    alert("Must select a character type. (Upper case, Lower case, Numbers, or Symbols)");
    var upperCaseConfirm = window.confirm("Would you like to include upper case letters?");
  }

  if (upperCaseConfirm) {
    characters += upperCase;
    console.log(characters);
  }
  if (lowerCaseConfirm) {
    characters += lowerCase;
    console.log(characters);
  }
  if (numbersConfirm) {
    characters += numbers; 
    console.log(characters);
  }
  if (symbolsConfirm) {
    characters += symbols;
    console.log(characters);
  }
  writePassword(length);
});