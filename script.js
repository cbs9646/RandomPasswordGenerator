// Assignment Code
let generateBtn = document.querySelector("#generate");
let lowerAlphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
let upperAlphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
let numberChoice = "0123456789".split("");
let specialCharacters = "!@#$%^&*()-_+={}[]".split("");
let selectedArrayPassword = [...lowerAlphabet, ...upperAlphabet, ...numberChoice, ...specialCharacters];


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  return "";

}

generateBtn.addEventListener("click", writePassword);


let passwordLength = prompt("Choose length of password between 8-128 characters");
console.log(passwordLength);
let upperChoice = prompt("Would you like lower case letters, Y or N");
console.log(upperChoice);
let lowerChoice = prompt("Would you like upper case letters, Y or N");
console.log(lowerChoice);
let numbers = prompt("Would you like numbers, Y or N");
console.log(numbers);
let specialCharChoice = prompt("Would you like special characters, Y or N");
console.log(specialCharChoice);
    
let randomLowerAlphabet = Math.floor(Math.random()*lowerAlphabet.length);
let randomUpperAlphabet = Math.floor(Math.random()*upperAlphabet.length);
let randomNumberChoice = Math.floor(Math.random()*numberChoice.length);
let randomSpecialCharacters = Math.floor(Math.random()*specialCharacters.length);

for (let i = 0; i < passwordLength; i++) {
  console.log(i)
  
}










// upperAlphabet[randomNumber]

// for (i = 0; i < 100; i++) {
  
//   console.log(upperAlphabet[randomNumber])  
// }


// let password = "";
// for (let i = 0; i < 100; i++) {
//   password+= upperAlphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
// }

// console.log(password);


// // Write password to the #password input



