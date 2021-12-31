
let passwordText = document.querySelector("#password");

    passwordText.value = password;
    
let generateBtn = document.querySelector("#generate");
let lowerAbcOptions = "abcdefghijklmnopqrstuvwxyz".split("");
let upperAbcOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let numberOptions = "0123456789".split("");
let specialCharacterOptions = "!@#$%^&*()-_+={}[]".split("");


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



//code to set up user selections

function arrayConcatenation() {
     let parameterSelections = [];
       if (upperChoice === true) {
         parameterSelections = parameterSelections.concat(upperAbcOptions);
     } if (lowerChoice === true) {
         parameterSelections = parameterSelections.concat(lowerAbcOptions);
     } if (numbers === true) {
         parameterSelections = parameterSelections.concat(numbers);
     } if (specialCharChoice === true) {
         parameterSelections = parameterSelections.concat(specialCharChoice);
     }
     return parameterSelections;

    };



 function commitPassword () {
      parameterSelections();
      newRandomArray [];
      for (let i = 0; i < lengthOfPw.valueOf; i++) {
           let randomNumberGeneration = Math.floor(Math.random()*parameterSelections.length);
           newRandomArray = newRandomArray.concat(parameterSelections[randomNumberGeneration]);
        

    


    
// }

// function generatePassword() {
//     return password;
// }



// let randomLowerAlphabet = Math.floor(Math.random()*lowerAbcOptions.length);
// let randomUpperAlphabet = Math.floor(Math.random()*upperAbcOptions.length);
// let randomNumberChoice = Math.floor(Math.random()*numberChoice.length);
// let randomSpecialCharacters = Math.floor(Math.random()*specialCharacterOptions.length);










generateBtn.addEventListener("click", commitPassword);