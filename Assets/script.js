// Assignment Code
var generateBtn = document.querySelector("#generate");

var length;
//Possible character types within the password
//lowerCase and upperCase letters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//numeric
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//special characters from the OWASP Foundation
var specialChar = ["\u0020", "\u0021", "\u0022", "\u0023", "\u0024", "\u0025", "\u0026", "\u0027", "\u0028", "\u0029", "\u002A", "\u002B", "\u002C", "\u002D", "\u002E", "\u002F", "\u003A", "\u003B", "\u003C", "\u003D", "\u003E", "\u003F", "\u0040", "\u005B", "\u005C", "\u005D", "\u005E", "\u005F", "\u0060", "\u007B", "\u007C", "\u007D", "\u007E"];
//password must be at least 8 characters long and no more than 128
//minLength = [8];

var lowerCaseConfirm;
var upperCaseConfirm;
var numberConfirm;
var specialCharConfirm;
var options;

var passwordArray = [];

// Write password to the #password input
  
 

//Create a function called generatePassword
function generatePassword () {
  //Create a series of prompts
  length = prompt("Choose a Password which is between 8 and 128 characters in length");

  if (length < 8 || length > 128) {
    length = alert("Desired length must be between 8 and 128 characters!");
    generatePassword();
    return;

  } else {

  // Create a series of confirms for user to select amongst variables listed above
    lowerCaseConfirm = confirm("Would you like to use lower case letters?");
    console.log(lowerCaseConfirm)

    upperCaseConfirm = confirm("Would you like to use upper case letters?");
    console.log(upperCaseConfirm)

    numberConfirm = confirm("Would you like to use numbers?");
    console.log(numberConfirm)

    specialCharConfirm = confirm ("Would you like to use special characters?");
    console.log(specialCharConfirm)

}

//Creat if statement if user hits cancel on all 4 choices
  if (!lowerCaseConfirm && !upperCaseConfirm && !numberConfirm && !specialCharConfirm) {
  alert("At least one criterion must be selected!");
  generatePassword();
  return;
//Create corresponding else if statements for all potential combinations of user selection

} else if (lowerCaseConfirm && upperCaseConfirm && numberConfirm && specialCharConfirm) {
  
    options = lowerCase.concat(upperCase, specialChar, number);

} else if (lowerCaseConfirm && upperCaseConfirm && specialCharConfirm) {
  
    options = lowerCase.concat(upperCase, specialChar);

} else if (lowerCaseConfirm && upperCaseConfirm && numberConfirm) {
  
    options = lowerCase.concat(upperCase, number);

} else if (lowerCaseConfirm && numberConfirm && specialCharConfirm) {
  
    options = lowerCase.concat(number, specialChar);

} else if (upperCaseConfirm && numberConfirm && specialCharConfirm) {
  
    options = upperCase.concat(number, specialChar);

} else if (upperCaseConfirm && numberConfirm) {

    options = upperCase.concat(number);

} else if (upperCaseConfirm && specialCharConfirm) {

    options = upperCase.concat(specialChar);

} else if (upperCaseConfirm && lowerCaseConfirm) {

    options = upperCase.concat(lowerCase);

} else if (lowerCaseConfirm && numberConfirm) {

    options = lowerCase.concat(number);

} else if (lowerCaseConfirm && specialCharConfirm) {
  
    options = lowerCase.concat(specialChar);

} else if (specialCharConfirm && numberConfirm) {

    options = specialChar.concat(number);

} else if (specialCharConfirm) {

    options = specialChar;

} else if (lowerCaseConfirm) {

    options = lowerCase;

} else if (upperCaseConfirm) {
  
    options = upperCase;

} else if (numberConfirm) { 

    options = number;

}

  for (i=0; i < length; i++){
    character = options[Math.round(Math.random(0, options.length) * options.length)];
    passwordArray.push(character);
  };
  console.log(passwordArray)

  
  var passwordText = document.querySelector("#password");
  finalpassword = passwordArray.join('');
  passwordText.value = finalpassword;
  passwordArray = [];
};

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
