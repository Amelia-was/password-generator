// Assignment Code
var generateBtn = document.querySelector("#generate");

// strings with possible characters
var upperAlphabetList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerAlphabetList = "abcdefghijklmnopqrstuvwxyz"
var numList = "1234567890"
var specialCharsList = "!\"#$%& '()*+,-./:;<=>?@[\\]^_`{|}~"

/* picks a random integer from 0 to length of string
var randomIndexInString = function(str) {
  return Math.floor(Math.random() * str.length);
} 
*/

// picks a random character in a string
var randomCharInString = function (str) {
  var index = Math.floor(Math.random() * str.length);
  return str[index];
}

// picks a random integer from 0 (inclusive) to num (exclusive) 
var randomToNumber = function (num) {
  return Math.floor(Math.random() * num);
}

/*
console.log(randomCharInString("12345"))
console.log(randomCharInString("asdfghjkl"))
console.log(randomCharInString("0"))
console.log(randomCharInString(upperAlphabetList))
console.log(randomCharInString(lowerAlphabetList))
console.log(randomCharInString(numList))
console.log(randomCharInString(specialCharsList))

console.log(randomToNumber(4))
console.log(randomToNumber(10))
console.log(randomToNumber(1))
console.log(randomToNumber(2))
console.log(randomToNumber(0))
*/

// get passLength
// get which character types
// create array w/ character types
// get random number of length of array
// pick that array
// pick random character and append it to newPass
// if list hasn't been picked yet, keep adding random strings
// if newPass is full but one list wasn't picked, kick out the first character of the password

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
      console.log(characterSet);
      return characterSet;
    }
}

var getLength = function() {
  var passLength = parseInt(window.prompt("How many characters should your password have? Please enter a number between 8 and 128."))
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    window.alert("Please enter a valid number.");
    getLength();
  }
  else {
    console.log(passLength)
    return passLength;
  }
}

whichCharacters();
getLength();



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
