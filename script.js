const passBox = document.getElementById("password");
// const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXWZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbole = "!@#$%&()+=-?/><~/|\[{}]";

const allchars = upperCase + lowerCase + number + symbole;

function createPass() {
    const selectRadio = document.querySelector('input[name="length"]:checked');

    // // Find the selected length
    // checkBoxes.forEach(checkBox => {
    //     if(checkBox.checked) {
    //         selectedLength = parseInt(checkBox.value, 10);
    //     }
    // });

    if(!selectRadio) {
        alert("Please select a password length.");
        return;
    }

    const selectedLength = parseInt(selectRadio.value, 10);


    // Gives random Password everytime.
    let password = '';

    // As there are only 4 letters generated so we do this loop for generating password that satisfy our pass length.
    for(let i=0; i<selectedLength; i++) {
        const randomIndex = Math.floor(Math.random() * allchars.length);
        password += allchars[randomIndex];
    }
    passBox.value = password;
}

// Used to copy Password
function copyPass(){
    passBox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}