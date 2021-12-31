let generateBtn = document.querySelector("#generate");


function commitPassword() {
    let generatedPassword = newPassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = generatedPassword;
}

let lowerAbcOptions = "abcdefghijklmnopqrstuvwxyz".split("");
let upperAbcOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let numberOptions = "0123456789".split("");
let specialCharacterOptions = "!@#$%^&*()-_+={}[]".split("");

function newPassword() {
let parameterSelections = [];
let newRandomArray = [];

let lengthOfPw = prompt("How many characters would you like in your password, from 8-128?");
    console.log(lengthOfPw);
let upperChoice = window.confirm("Would you like uppercase letters?");
    console.log(upperChoice);
let lowerChoice = window.confirm("Would you like lowercase letters?");
    console.log(lowerChoice);
let numbers = window.confirm("would you like numbers?");
    console.log(numbers);
let specialCharChoice = window.confirm("Would you like special characters?");
    console.log(specialCharChoice);

  if (upperChoice === true) {
         parameterSelections = parameterSelections.concat(upperAbcOptions);
} if (lowerChoice === true) {
         parameterSelections = parameterSelections.concat(lowerAbcOptions);
} if (numbers === true) {
         parameterSelections = parameterSelections.concat(numberOptions);
} if (specialCharChoice === true) {
         parameterSelections = parameterSelections.concat(specialCharacterOptions);
}

for (let i = 0; i < lengthOfPw.valueOf(); i++) {
           let randomNumberGeneration = Math.floor(Math.random()*parameterSelections.length);
           newRandomArray = newRandomArray.concat(parameterSelections[randomNumberGeneration]);
      }
        return newRandomArray.join('');
}
        
generateBtn.addEventListener("click", commitPassword);