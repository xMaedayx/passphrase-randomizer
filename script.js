// Assignment code here
var num = ['0,1,2,3,4,5,6,7,8,9']
var lowerc = ['abcdegfhijklmnopqrstuvwxyz']
var upperc = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
var specialc = ["\"!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ "] */ how do i add a single and double quote without messing up syntax? */
var Generated = [];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  function generatePassword {
  var userInput1 = numbers(window.confirm("Allow me inquire about your passphrase, what length would you like it to be (8-128 characters)?"))
  
  var userInput2 = window.confirm("Would you like special characters in your passphrase (y/n)? ")
  if (userInput2 = 'n') {
    var userInput4 = window.confirm("Would you like to include lowercase, uppercase and, numeric characters? (y/n)")}
    else { var userInput3 = window.confirm("Which special characters would you prefer in your new passphrase? Here are the allowed characters, !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ")
  }

  if (userInput2 && userInput4 == 'y'); {
    for (i =0; i <= userInput1; i++) {
     grid.push(Generated.concat( lowerc + upperc + num + userInput3))
    }
    } 
  
  if (userInput2 == 'n') and (userInput4 == 'y'); {
    for (i =0; i <= userInput1; i++) {
    grid.push(Generated.concat( num + lowerc + upperc ))
    }
  }
  
  if (userInput2 == 'y') and (userInput4 == 'n'); {
    for (i =0; i <= userInput1; i++) {
      grid.push(Generated.concat(num + lower))
     } 
     /* wait the AC says I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters. /*

  }
  function writePassword() {
  
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  /* if (userInput2 && userInput4 == 'y') {
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
/*







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
