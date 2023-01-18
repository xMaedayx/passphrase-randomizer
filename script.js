// Assignment code here
var num = ['0,1,2,3,4,5,6,7,8,9']
var lowerc = ['abcdegfhijklmnopqrstuvwxyz']
var upperc = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
var specialc = ["\"!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ "] */ how do i add a single and double quote without messing up syntax? */
var Generated = [];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  function generatePassword() {
  
  var userInput1 = Number(window.prompt("Allow me inquire about your passphrase, what length would you like it to be (8-128 characters)?"))
  var userInput2 = window.prompt("Would you like special characters in your passphrase (y/n)? ")
  var userInput3 = window.prompt("Which special characters would you prefer in your new passphrase? Here are the allowed characters, !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ")
  var userInput4 = window.prompt("Would you like lowercase characters? (y/n)")
  var userInput5 = window.prompt( "Would you like Uppercase characters? (y/n)")
  var userInput6 = window.prompt("Would you like numeric characters? (y/n) ")
  

  if (userInput2 === 'n' && userInput4 === 'n' && userInput5 === 'n' && userInput6 === 'n') {
    alert('hello')
  return null
   } 
if (userInput2 === 'n' && userInput4 === 'y' && userInput5 === 'n' && userInput6 === 'y') { 
for (i =0; i <= userInput1; i++) { 
      Generated.push(Generated.concat( userInput2 + lowerc.split + specialc.split ))
    } 
  }
if (userInput2 === 'y' && userInput4 === 'y' && userInput5 === 'n' && userInput6 === 'n') {
for (i =0; i <= userInput1; i++) {
    Generated.push(Generated.concat(userInput3 + lowerc.split + upperc.split  )) }
  }

if (userInput2 === 'n' && userInput4 === 'n' && userInput5 === 'y' && userInput6 === 'y') { 
for (i =0; i <= userInput1; i++) {
    Generated.push(generated.concat(userInput3 + lowerc.split + upperc.split + num.split)) } 
  console.log()
   }
if (userInput2 === 'y' && userInput4 === 'n' && userInput5 === 'y' && userInput6 === 'n') { 
for (i = 0; i <= userInput1; i++) {
    Generated.push(generated.concat(userInput3 + upperc.split)) }
  }
  return Generated
}
  // Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);



