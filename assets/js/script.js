// All of the available options for the client to chose from
const ALL_INCLUDES = ["lowercase", "uppercase", "numeric", "special"]

// Define all the characters that can be used in the password
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
const NUMBERS = "1234567890"
const SPECIAL = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"+'"'

const ALL_CHARACTERS = {
    lowercase : ALPHABET.split(''),
    uppercase : ALPHABET.toUpperCase().split(''),
    numeric : NUMBERS.split(''),
    special : SPECIAL.split(''),
}

// Define used elements
const passwordButton = document.querySelector('#passwordButton');
const body = document.querySelector("body")
const passwordLabel = document.querySelector("#password")

passwordButton.addEventListener("click", function () {
    // Ask the client for the length of the password
    const passwordLength = prompt("Enter the length of your password", "16");

    // Define strict paramters for the password to fall into
    if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
        alert("password length is invalid!")
        return
    }
    
    // Ask the user for each one of the avaible options to include in their password
    let selectedCharacters = []
    for (let i = 0; i < ALL_INCLUDES.length; i++) {
        const includeString = ALL_INCLUDES[i]
        const didInclude = confirm("Include " + includeString + " characters?")
        
        if (didInclude) {
            selectedCharacters = selectedCharacters.concat(ALL_CHARACTERS[includeString])
        }
    }

    // If the user selected nothing then end the operation
    if (selectedCharacters.length === 0) {
        alert("You did not select any characters to include in your password!")
        return
    }

    // Generate the password from the characters the user selected
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        const random = Math.floor(Math.random() * selectedCharacters.length);
        password = password + selectedCharacters[random]
    }

    // Finally show the password to the user
    prompt("Your password is:", password)

    // Apply visual changes
    floatPassword = document.createElement("h1")
    floatPassword.textContent = password
    floatPassword.className = "float"
    body.appendChild(floatPassword)
})