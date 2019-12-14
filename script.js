
var passCharacterLength =
prompt("How many characters for your passowrd? (8-128)");
if (passCharacterLength > 128 || passCharacterLength < 8) {
passCharacterLength = prompt("Not valid. Must be between 8 and 128.");
}
if (passCharacterLength > 128 || passCharacterLength < 8) {
passCharacterLength = prompt("Not valid, AGAIN. Must be between 8 and 128.");
}
if (passCharacterLength > 128 || passCharacterLength < 8) {
location.reload();
}
else {
var specialCharacters = confirm("Special Characters?")

var numberCharacters = confirm("Numbers?")

var upperCharacters = confirm("Uppercase letters?")

var lowerCharacters = confirm("Lowercase letters?")

function generatePassword() {

    var charList = "";

    if (specialCharacters) {
        charList = charList + "!@#$%^&*()-_=+~";
    }

    if (numberCharacters) {
        charList = charList + "1234567890";
    }

    if (upperCharacters) {
        charList = charList + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (lowerCharacters) {
        charList = charList + "abcdefghijklmnopqrstuvwxyz";
    }

    if (charList == "") {
        alert("You didn't pick any criteria! This is not a fingerprint reader. Refresh to try again.");
        return;
    }

    var pass = "";

    for (var i = 0; i < passCharacterLength; i++) {
        pass += charList[Math.floor(Math.random() * charList.length)];
    }
    document.getElementById('passwordBox').value = pass;
}

function copyPassword() {
    var copyText = document.getElementById("passwordBox");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

}
}