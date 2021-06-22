// Assignment Code
var generateBtn = document.querySelector("#generate");
//Possible character types within the password
//lowerCase and upperCase letters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//numeric
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//special characters from the OWASP Foundation
var specialChar = ["\U0020", "\U0021", "\U0022", "U0023", "\U0024", "\U0025", "\U0026", "\U0027", "\U0028", "\U0029", "\U002A", "\U002B", "\U002C", "\U002D", "\U002E", "\U002F", "\U003A", "\U003B", "\U003C", "\U003D", "\U003E", "\U003F", "\U0040", "\U005B", "\U005C", "\U005D", "\U005E", "\U005F", "\U0060", "\U007B", "\U007C", "\U007D", "\U007E"];
//password must be at least 8 characters long and no more than 128
minLength = [8];
maxLength = [128];

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
