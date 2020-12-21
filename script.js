// Assignment Code
var generateBtn = document.querySelector("#generate");

// strings with possible characters
var upperAlphabetList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerAlphabetList = "abcdefghijklmnopqrstuvwxyz"
var numList = "1234567890"
var specialCharsList = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

// picks a random character in a string
var randomCharInString = function(str) {
  var index = Math.floor(Math.random() * str.length);
  return str[index];
}

// picks a random integer from 0 (inclusive) to num (exclusive) 
var randomNumber = function(num) {
  return Math.floor(Math.random() * num);
}

// find which character types to include in password
var whichCharacters = function() {
  var characterSet = [];
    if (
      window.confirm("Select OK to include uppercase letters in your password")) {
      characterSet.push(upperAlphabetList);
    }
    if (
      window.confirm("Select OK to include lowercase letters in your password")) {
      characterSet.push(lowerAlphabetList);
    }
    if (
      window.confirm("Select OK to include numbers in your password")) {
      characterSet.push(numList);
    }
    if (
      window.confirm("Select OK to include special characters in your password")) {
      characterSet.push(specialCharsList);
    }
    if (characterSet.length === 0) {
      window.alert("Please select at least one character type.");
      whichCharacters();
    } 
    else {
      return characterSet;
    }
}

// find password length
var getLength = function() {
  var passLength = parseInt(window.prompt("How many characters would you like your password to have? Please enter a number between 8 and 128."))
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    window.alert("Please enter a valid number.");
    getLength();
  }
  else {
    return passLength;
  }
}

// generate password function
var generatePassword = function() {
  var passwordLength = getLength();
  var charArray = whichCharacters();
  var password = "";

  // append a random character from a random list until password length achieved
  for (var i = 0; i < passwordLength; i++) {
    pickedCharset = charArray[randomNumber(charArray.length)];
    password = password.concat(randomCharInString(pickedCharset));
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
