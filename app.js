let awayScore = 0;
let homeScore = 0;



const homeText = document.getElementById('homeText')
const awayText = document.getElementById('awayText')
const userCodeElement = document.getElementById('userCodeSpan')
function resetBtn() {
}


function addOneHome(num) {
    homeText.innerHTML + num + 

}

function addThreeHome(num) {
    homeText.innerText += num
}


// !SECTION

// SECTION application code
// NOTE global scoped variables are accessible to all other pieces of code and can be changed at will

// const secretCode = '💀💀😺💀🙂'

// const superSecretCode = '🍉🐃💀💀😺'

// let userCode = ''

// REVIEW all different ways to declare functions
// const addSmiley = function(){}
// const addSmiley = () => { }

// NOTE this a definition for the function, the HTML can call this function by invoking it, example: addSmiley()
// function addSmiley() {
//     userCode += '🙂'
//     console.log('you clicked on the smiley', userCode);

//     updateUserCodeElement()
// }

// function addKitty() {
//     userCode += '😺'
//     console.log('you clicked on the kitty', userCode)

//     updateUserCodeElement()
// }

// function addSkull() {
//     userCode += '💀'
//     console.log('you clicked on the skull', userCode)

//     updateUserCodeElement()
// }

// NOTE addEmoji has a parameter named emoji that is assigned when the function is called
// addEmoji('🐃') the parameter's value would be the yak emoji
// addEmoji('🍉') the parameter's value would be the watermelon emoji
// addEmoji() the parameter's value would be undefined
// function addEmoji(emoji) {
//     console.log('This is the emoji', emoji);
//     userCode += emoji
//     updateUserCodeElement()
// }

// function checkCode() {
//     if (userCode == secretCode) {
//         console.log('YOU GOT IT RIGHT BUDDY')
//         revealSecretPicture()
//     }
//     else if (userCode == superSecretCode) {
//         revealSuperSecretPicture()
//     }
//     else {
//         console.log("YOU GOT IT WRONG, NOT SMART GUY")
//         // Closes browser tab
//         window.alert('YOU ARE SO DUMB')
//         // Closes browser tab
//         window.close()
//     }
//     userCode = ''
//     updateUserCodeElement()
// }

// function updateUserCodeElement() {
//     // grabs a reference to the HTML element using the supplied id
//     const userCodeElement = document.getElementById('userCodeSpan')
//     console.log('user code element', userCodeElement);
//     // NOTE changes the innterText of the element. If any text (or HTML) is present within the element, it will be overwritten
//     userCodeElement.innerText = userCode
// }

// function revealSecretPicture() {
//     const resultBoxElement = document.getElementById('resultBox')
//     console.log('here is the result box element', resultBoxElement);

//     // if using innerHTML, the string will be read as if it is HTML
//     resultBoxElement.innerHTML = '<img class="img-fluid" src="https://images.unsplash.com/photo-1611145949721-e5158cddf59f?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Best cat ever">'
// }

// function revealSuperSecretPicture() {
//     const resultBoxElement = document.getElementById('resultBox')
//     console.log('here is the rsult box element', resultBoxElement);

//     // if using innerHTML, the string will be read as if it is HTML
//     resultBoxElement.innerHTML = '<img class="img-fluid" src="https://images.unsplash.com/photo-1599137258505-8871bd07cbbb?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Best cat ever">'
// }

