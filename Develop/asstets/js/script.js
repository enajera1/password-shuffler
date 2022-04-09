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
      return passLength;
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
  console.log(passCaseconfirm1);
  return(passCaseconfirm1);
};

//function asking user if they want lower case characters or not
function passCase2() { 
  var passCaseconfirm2 = window.confirm("Do you want lower case characters?")
    console.log(passCaseconfirm2);
    return(passCaseconfirm2);
  }

// Function asking user for special characters or not
function passChar()  {
  var passCharconfirm = window.confirm("Do you want to use special characters or not?");
  console.log(passCharconfirm);
  return(passCharconfirm);
    // USE SPECIAL CHARACTERS ARRAY
    // DON'T USE SPECIAL CHARACTERS ARRAY
}
//Function asking user if they want to use numbers or not
function passNum(){
  var passNumconfirm = window.confirm("Do you want to use numbers or not?");
  console.log(passNumconfirm);
  return(passNumconfirm);
}  


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

var generatorArray = []

function generatePassword() {
  var length = userinputLength();
  var lower = passCase1();
  var upper = passCase2();
  var char = passChar();
  var number = passNum();
    if (lower === true) {
      generatorArray.push(getRandomLower)
    }
    if (upper === true) {
      generatorArray.push(getRandomUpper);
    }
    if (char === true) {
      generatorArray.push(getRandomSymbol);
    }
    if (number === true) {
      generatorArray.push(getRandomNumber);
    }
  var finalPassword = "" ;
  for ( var i = 0; i < length; i++ ) {
    var indexRandom = Math.floor(Math.random() * generatorArray.length)
    finalPassword += generatorArray[indexRandom]() 
  }
  return finalPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

 //Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//writePassword();

