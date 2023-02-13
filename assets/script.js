// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  function generatePassword() {
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var lowerc = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"]
  var upperc = ["A","B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var specialC = ["!","#","$","%","&","'"];
  var Generated = [];
  
  var userInput1 = Number(window.prompt("Allow me inquire about your passphrase, what length would you like it to be (8-128 characters)?"))
  var userInput2 = window.prompt("Would you like special characters in your passphrase (y/n)? ")
  var userInput4 = window.prompt("Would you like lowercase characters? (y/n)")
  var userInput5 = window.prompt( "Would you like Uppercase characters? (y/n)")
  var userInput6 = window.prompt("Would you like numeric characters? (y/n) ")



  if (userInput2 === 'n' && userInput4 === 'n' && userInput5 === 'n' && userInput6 === 'n') {
    alert('hello')
  return null
   } 
   if (userInput1 > 128) {
    alert("choose a number between 8-128.")
    return null
   }
if (userInput2 === 'y') {
   Generated = Generated.concat(specialC)
  
  }

   if ( userInput4 === 'y') { 
    Generated = Generated.concat(lowerc)
   
    } 

if ( userInput5 === 'y') {

   Generated = Generated.concat(upperc) 
  
}
   

if (userInput6 === 'y') { 
  Generated = Generated.concat(num) } 
 
    
     console.log(Generated)
     var password = ""

     for (i = 1; i <= userInput1; i++) {
  var randomIndex = Math.floor(Math.random() * Generated.length);
  var randomized = Generated[randomIndex];
  password += randomized
} 

return password 
}
  
  

  // Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}


generateBtn.addEventListener("click", writePassword);




