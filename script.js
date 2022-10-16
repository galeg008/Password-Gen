// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Alphabet, Numbers, Special Characters

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O","P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = uppercase.map((letter) => letter.toLowerCase())
var numbers = [0,1,2,3,4,5,6,7,8,9]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-","_","=","+","[","]","{","}",":",";","'","<",">","?","/"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}


// Function to generate password
function generatePassword() {
  //How long should password be
  var passwordLength = 0;

  //while loop to make sure we stay within a specific length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt 
    ("How long would you like your password to be? (8-128)","10");
   }
  console.log(passwordLength);

   
  
  // Step 1 Ask how many characters does the user want the password to be
var passwordLength = prompt ('How many characters would you like your password to be? (8-128)','10')
  console.log(passwordLength)


var passwordOptions = [];
var useUpperCase = false;
var useLowerCase = false;
var useNumbers = false;
var useSpecial = false;

// while loop to make sure we at least get one true for what to use for the password
while (!useUpperCase && !useLowerCase && !useNumbers && !useSpecial)

// Step 2 Ask if the user wants to use uppercase
var useUpperCase = confirm ('Would you like to include uppercase letters?')
  console.log(useUpperCase)
// Step 3 Ask if the user wants to use lowercase
var useLowerCase = confirm ('Would you like to include lowercase letters?')
  console.log(useLowerCase)
// Step 4 Ask if the user wants to use numbers
var useNumbers = confirm ('Would you like to use numbers')
  console.log(useNumbers)
// Step 5 Ask if the user wants to use special chars
var useSpecialChars = confirm ('Would you like to include special characters')
  console.log(useSpecialChars)


  //Arrange the proper characters, letters, and numbers into a data structure, that we cant extract
  //A random character for each number of the length

  //create the structure of potential characters
  var potentialChars= []
  if (useUpperCase) {
    potentialChars = potentialChars.concat(uppercase)
  }

  if (useLowerCase) {
    potentialChars = potentialChars.concat(lowercase)
  }
  
  if (useNumbers) {
    potentialChars = potentialChars.concat(numbers)
  }

  if (useSpecialChars) {
    potentialChars = potentialChars.concat(special)
  }
  console.log(potentialChars)
  

  //Create the password of "passwordLength" length
  var password = '';
  for (var i = 0; i < passwordLength; i ++) {
    
    password = password + potentialChars[getRandomInt(potentialChars.length)]
  }
  return password
  
}
