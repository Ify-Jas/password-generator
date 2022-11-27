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



var passLength = prompt('Please select a number between 10 and 64');
var passNum = confirm('Would you like to include numbers?');
var passUppercase = confirm('Would you like to include uppercases?');
var passLowercase = confirm('Would you like to include lowercases?');
var passSpecial = confirm('Would you like to include special characters?');

// Function for getting a random element from an array
function getRandom(numericCharacters) {
  return numericCharacters[Math.floor(Math.random() * numericCharacters.length)];

}
function getRandom(specialCharacters) {
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

}
function getRandom(upperCasedCharacters) {
  return upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];

}
function getRandom(lowerCasedCharacters) {
  return lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];

}


// Function to generate password with user input
function generatePassword() {
  let passChar = '';
  for (var i=0; i < passLength; i++) {
    if (passNum && passLowercase && passSpecial && passUppercase) {
      passChar += getRandom(numericCharacters);
      passChar += getRandom(specialCharacters);
      passChar += getRandom(lowerCasedCharacters);
      passChar += getRandom(upperCasedCharacters);
    } else if (!passNum) {
      passChar -= getRandom(numericCharacters);
    } else if (!passLowercase) {
      passChar -= getRandom(lowerCasedCharacters);
    } else if (!passUppercase) {
      passChar -= getRandom(upperCasedCharacters);
    } else if (!passSpecial) {
      passChar -= getRandom(specialCharacters);
    } else {
      alert('Please select an option');
    }

    

  }
  
  let password = '';
  for (var i=0; i < passLength; i++) {
    password += passChar[i];
  }
  
  return password;
}

  
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  
}
writePassword();

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);