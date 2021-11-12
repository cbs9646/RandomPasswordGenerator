// Assignment Code
let generateBtn = document.querySelector("#generate");
let lowerAlphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
let upperAlphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
let numbers = "0123456789".split("");
let specialCharacters = "!@#$%^&*()-_+={}[]".split("");
let concatinatedArrayPassword = []


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  return "Hello World";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// let choices = ["Uppercase", "Lowercase", "Numbers", "Special"];

let passwordLength = prompt("Choose length of password between 8-128 characters");

    console.log(passwordLength);
    passwordLength.toUpperCase
   





let randomNumber = Math.floor(Math.random()*upperAlphabet.length);



let selectedArrays = [];

if () {

  selectedArrays = [...lowerAlphabet, ...upperAlphabet, ...numbers, ...specialCharacters];
  
}

upperAlphabet[randomNumber]

for (i = 0; i < 100; i++) {
  
  console.log(upperAlphabet[randomNumber])  
}


let password = "";
for (let i = 0; i < 100; i++) {
  password+= upperAlphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
}

console.log(password);


// Write password to the #password input



