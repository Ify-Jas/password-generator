// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// To add all characters in one array
let allChar = [];
for (var i =0; i < specialCharacters.length; i++) {
  allChar.push(specialCharacters[i]);  
}
for (var i =0; i < numericCharacters.length; i++) {
  allChar.push(numericCharacters[i]);  
}
for (var i =0; i < upperCasedCharacters.length; i++) {
  allChar.push(upperCasedCharacters[i]);  
}
for (var i =0; i < lowerCasedCharacters.length; i++) {
  allChar.push(lowerCasedCharacters[i]);  
}

var passLength = prompt('Please choose a number from 10 to 64');

// Function to prompt user for password options
function getPasswordOptions() {
  var passNum = prompt('Would you like to include numbers? Yes/No');
  var passUppercases = prompt('Would you like to include uppercases? Yes/No');
  var passLowercases = prompt('Would you like to include lowercases? Yes/No');
  var passSpecial = prompt('Would you like to include special characters? Yes/No');

}
getPasswordOptions();


// Function for getting a random element from an array
function getRandom(allChar) {
  return allChar[Math.floor(Math.random() * allChar.length)];

}

// Function to generate password with user input
function generatePassword() {
  for (var i=0; i < passLength; i++) {
    getRandom();
  }
  

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);