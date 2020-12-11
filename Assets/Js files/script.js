// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function that returns a generated password
function generatePassword() {

  // Creating a variable that will store the generated password
  var generatedPassword = '';
  var passwordLength = prompt(" Please choose a length for your password between 8-128");

  while ((passwordLength < 8 || passwordLength > 128) && passwordLength) {
    alert("Please try again");
    passwordLength = prompt(" Please choose a length for your password between 8-128");
  }

  // Prompting the user for lowercase, uppercase, numbers, special character in the password
  var isUpperCase = confirm("Do you want uppercase letters in your password");
  var isLowerCase = confirm("Do you want lowercase letters in your password");
  var specialCharacter = confirm("Do you want special characters in your password");
  var isNumeric = confirm("Do you want numbers characters in your password");


  var letters = 'abcdefghijklmnopqrstuvwxyz';
  var specialCharacterString = '!@#$%^&*()_+=-<>?,.[]{}\/';

  //if statments to check the user's choice
  if (isUpperCase && !isLowerCase) {
    letters = letters.toUpperCase()
  }
  if (isUpperCase && isLowerCase) {
    letters += letters.toUpperCase()
  }
  if (!isLowerCase && !isUpperCase) {
    letters = '';
  }
  if (specialCharacter) {
    letters += specialCharacterString
  }
  if (isNumeric) {
    for (var i = 0; i < 10; i++) {
      letters += i;
    }
  }

  //generating the password and storing it in the variable
  for (var i = 0; i < passwordLength; i++) {
    generatedPassword += letters.charAt(Math.floor(Math.random() * letters.length))
  }

  //returning the generated password
  return generatedPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

