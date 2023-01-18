// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  function generatePassword() {
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var lowerc = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"]
  var upperc = ["A","B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var Generated = [];
  
  var userInput1 = Number(window.prompt("Allow me inquire about your passphrase, what length would you like it to be (8-128 characters)?"))
  var userInput2 = window.prompt("Would you like special characters in your passphrase (y/n)? ")
  var userInput3 = window.prompt("Which special characters would you prefer in your new passphrase? Here are the allowed characters, !#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ")
  var userInput4 = window.prompt("Would you like lowercase characters? (y/n)")
  var userInput5 = window.prompt( "Would you like Uppercase characters? (y/n)")
  var userInput6 = window.prompt("Would you like numeric characters? (y/n) ")


  if (userInput2 === 'n' && userInput4 === 'n' && userInput5 === 'n' && userInput6 === 'n') {
    alert('hello')
  return null
   } 
if (userInput2 === 'y' && userInput4 === 'y' && userInput5 === 'y' && userInput6 === 'y') {
  var Generated1 = Generated.concat(userInput3, lowerc, upperc, num)

  }
   if (userInput2 === 'n' && userInput4 === 'y' && userInput5 === 'n' && userInput6 === 'y') { 
    var Generated1 = Generated.concat(lowerc, num)
    } 

if (userInput2 === 'y' && userInput4 === 'y' && userInput5 === 'n' && userInput6 === 'n') {

    var Generated1 = Generated.concat(userInput3, lowerc) }
   

if (userInput2 === 'n' && userInput4 === 'n' && userInput5 === 'y' && userInput6 === 'y') { 
   var Generated1 = Generated.concat(upperc, num) } 
    
if (userInput2 === 'y' && userInput4 === 'n' && userInput5 === 'y' && userInput6 === 'n') { 
  var Generated1 = Generated.concat(userInput3, upperc)
     }
for (i = 1; i <= userInput1; i++){
  var password1 = Math.floor(Math.random() * userInput1);
  var randomized =Generated1[password1];
 }
return randomized 

  }
  

  // Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}


generateBtn.addEventListener("click", writePassword);



