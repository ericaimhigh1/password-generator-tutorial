let passwordBox = document.querySelector(".password-text"),
  copyBtn = document.querySelector(".copyBtn"),
  uppercaseOption = document.querySelector(".uppercase-check"),
  lowercaseOption = document.querySelector(".lowercase-check"),
  numbersOption = document.querySelector(".numbers-check"),
  symbolsOption = document.querySelector(".symbols-check"),
  generateBtn = document.querySelector(".generateBtn"),
  passwordLength = document.querySelector(".passwordLength"),
  lengthIndicator = document.querySelector(".range-value");

let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz",
  numbers = "1234567890",
  symbols = "!@#$%^&*()_+";

// Generate New Password
function generatePassword() {
  let allowedCharacters = "";

  uppercaseOption.checked ? (allowedCharacters += upperCaseLetters) : null;
  lowercaseOption.checked ? (allowedCharacters += lowerCaseLetters) : null;
  numbersOption.checked ? (allowedCharacters += numbers) : null;
  symbolsOption.checked ? (allowedCharacters += symbols) : null;

  let generatedPassword = "";

  for (i = 0; i < passwordLength.value; i++) {
    let randomPoint = Math.floor(Math.random() * allowedCharacters.length);
    generatedPassword += allowedCharacters.charAt(randomPoint);
  }
  passwordBox.innerText = generatedPassword;
}

generatePassword();

generateBtn.onclick = generatePassword;

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordBox.innerText);
  alert("Password has been copied");
});

uppercaseOption.onchange = generatePassword;
lowercaseOption.onchange = generatePassword;
numbersOption.onchange = generatePassword;
symbolsOption.onchange = generatePassword;

passwordLength.oninput = function () {
  lengthIndicator.innerText = this.value;
  generatePassword();
};
