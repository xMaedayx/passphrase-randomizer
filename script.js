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
  var userInput5 = window.prompt("Would you like lowercase characters? (y/n)")
  var userInput6 = window.prompt( "Would you like Uppercase characters? (y/n)")
  var userInput7 = window.prompt("Would you like numeric characters? (y/n) ")
  

  if (userInput2 === 'y' && userInput5 === 'y' && userInput6 === 'y' && userInput7 === 'y'); {
    for (i =0; i <= userInput1; i++) {
     Generated.push(Generated.concat( lowerc + upperc + num + userInput3))
    }
    } 
  if (userInput2 === 'n' && userInput5 === 'n' && userInput6 === 'n' && userInput7 === 'n'); {
      alert('')
    return null
     } 
  if (userInput2 === 'n' && userInput5 === 'y' && userInput6 === 'n' && userInput7 === 'y'); { 
      for (i =0; i <= userInput1; i++) { 
        Generated.push(Generated.concat( userInput2 + lowerc + specialc ))
      } 
  if (userInput2 === 'y' && userInput5 === 'y' && userInput6 === 'n' && userInput7 === 'n'); {
      for (i =0; i <= userInput1; i++) {
      Generated.push(Generated.concat(userInput3 + lowerc + upperc  )) }
    }

  if (userInput2 === 'n' && userInput5 === 'n' && userInput6 === 'y' && userInput7 === 'y'); { 
      for (i =0; i <= userInput1; i++) {
      Generated.push(generated.concat(userInput3 + lowerc + upperc + num)) } 

     }
  if (userInput2 === 'y' && userInput5 === 'n' && userInput6 === 'y' && userInput7 === 'n'); { 
      for (i = 0; i <= userInput1; i++) {
      Generated.push(generated.concat(userInput3 + upperc)) }
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


// option 2 //
   /*if (userInput2 === 'y') {
    end user
    Generated.concat(specialc)
  }
    else { }
  
  if (userInput3 === "\"!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~") {
    Generated.concat(userInput3);
  }
  if (userInput5 === 'y') {
    Generated.concat(lowerc);
  }
  if (userInput6 === 'y') {
    Generated.concat(upperc);
  }
  if (userInput7=== 'y') {
    Generated.concat(num);
  }
/*
 
 
 
 
 
 
 
 
 
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
