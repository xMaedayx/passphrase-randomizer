// Assignment code here
var ComputerOptions = ["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
var ComputerOptions2 = ["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"]
var ComputerOptions3 = [""]


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  function generatePassword {
  var userInput1 = window.prompt("Allow me inquire about your passphrase, what length would you like it to be (8-128 characters)?")
  userInput1 = userInput1.parseFloat() /* how do I use the length of this float in the window.alert below? */

  var userInput2 = window.prompt("Would you like special characters in your passphrase (y/n)? ")
  
  var userInput3 = window.prompt("Which special characters would you prefer in your new passphrase? Here are the allowed characters, !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ")
  
  var userInput4 = window.prompt("Would you like to include lowercase, uppercase and, numeric characters? (y/n)")

  if (!Number.isInteger(userInput1)) {
    return; 
  }

  if (userInput2 && userInput4 == 'y') {
   var generation1 = Math.floor(Math.random() * ComputerOptions.length )
   var randomized = ComputerOptions[generation1]
   window.alert("New Passphrase:" + randomized + userInput3 )

  }

  if (userInput2 && userInput4 == 'n') {
    var generation2 = Math.floor(Math.random() * ComputerOptions2.length)
    var randomized2 = ComputerOptions2[generation2]
    window.alert("New Passphrase: " + randomized2 )
  }

  if (userInput2 == 'n') and (userInput4 == 'y') { 

  }








}


// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

















/* some code from activity 28 
var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  window.alert("The computer chose " + computerChoice); */
