// Assignment code here
// Window Prompts for user/Event listener

function userinputLength() {
  var passLength = Number(window.prompt("How many characters in length should your password be? Enter a number between 8 and 128", ""));
  //Comparing input from user to see if it's valid
  if (passLength >= 129 || passLength <= 7) {
    window.alert("That's outside the given range, try again!")
    userinputLength()
  }
  else {
    if (typeof(passLength) === "number"){
      console.log(passLength);
      window.alert("You have chosen " + passLength);
    } else if (typeof(passLength) === "string", "char"){
      console.log("NOT A NUMBER");
      window.alert("That's not a number, try again?");
      userinputLength()
    }
  }

  //Create a variable containing prompt/alert/something window for user defined types of characters (Upper-case, Lower-Case, Special Characters(MAY NEED MORE THAN ONE for letters, case, numbers, special characters)
};
//Function asking user for uppercase or not
function passCase1 () {
  var passCaseconfirm1 = window.confirm("Do you want Upper case characters?")
  if (passCaseconfirm1 === true) {
    window.alert("You have chosen to use upper case characters.")
  } else {
    window.alert("You have chosen to NOT use upper case characters")
  }
  console.log(passCaseconfirm1);
};

//function asking user if they want lower case characters or not
function passCase2() { 
  var passCaseconfirm2 = window.confirm("Do you want lower case characters?")
      if (passCaseconfirm2 === true) {
        window.alert("You have chosen to use lower case characters.")
      }else {
        window.alert("You have chosen NOT to use lower case characters.")
      }
      //USE UPPERCASE ARRAY
    
    console.log(passCaseconfirm2);
  }

// Function asking user for special characters or not
function passChar()  {
  var passCharconfirm = window.confirm("Do you want to use special characters or not?");
  if (passCharconfirm) {
    window.alert("You have chosen to use special characters");
    // USE SPECIAL CHARACTERS ARRAY
  } else{
    window.alert("You have chosen NOT to use special characters");
    // DON'T USE SPECIAL CHARACTERS ARRAY
  }
  console.log(passCharconfirm)
}
//Function asking user if they want to use numbers or not
function passNum(){
  var passNumconfirm = window.confirm("Do you want to use numbers or not?");
  if (passNumconfirm) {
    window.alert("You have chosen to use numbers");
    //USE SPECIAL CHARACTERS ARRAY
  } else {
    window.alert("You have chosen NOT to use numbers");
    //DONT USE SPECIAL CHARACTERS ARRAY
  }
  console.log(passNumconfirm);
}  

const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');


const randomFun = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

generateEl.addEventListener('click', () => {
  const length = userinputLength.value;

  console.log(length);
});

//random generators
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol () {
  const symbols = '!@#$%^&*(){}[]=<>,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);



//writePassword();
function run () {
  userinputLength();
  passCase1();
  passCase2();
  passChar();
  passNum();
}

run ();