// COLOUR SELECTOR
const changeColourBtns = document.getElementsByClassName("button")
const generateBtnMobile = document.getElementById("generate")
const backgroundColours = document.getElementsByClassName("colour")
const newHexCode = document.getElementsByClassName("hex_colour")

//Generate New Colour Function
function getNewColours() {
  let hexCode = "0123456789ABCDEF"
  let hexColourCode = "#"

  for (let i = 0; i < 6; i++) {
    hexColourCode += hexCode[Math.floor(Math.random() * 16)]
  }
  return hexColourCode
}

//Loop For Hex Codes/Background Colours
for (let i = 0; i < backgroundColours.length; i++) {}
for (let i = 0; i < newHexCode.length; i++) {}

//Change ALL colours Function
function changeAllColours() {
  let hexcode_0 = (backgroundColours[0].style.background = getNewColours())
  newHexCode[0].innerHTML = hexcode_0
  let hexcode_1 = (backgroundColours[1].style.background = getNewColours())
  newHexCode[1].innerHTML = hexcode_1
  let hexcode_2 = (backgroundColours[2].style.background = getNewColours())
  newHexCode[2].innerHTML = hexcode_2
}

//Change individual colours-1 Function
function changeIndividualColours_1() {
  let hexcode_0 = (backgroundColours[0].style.background = getNewColours())
  newHexCode[0].innerHTML = hexcode_0
}

//Change individual colours-2 Function
function changeIndividualColours_2() {
  let hexcode_1 = (backgroundColours[1].style.background = getNewColours())
  newHexCode[1].innerHTML = hexcode_1
}

//Change individual colours-3 Function
function changeIndividualColours_3() {
  let hexcode_2 = (backgroundColours[2].style.background = getNewColours())
  newHexCode[2].innerHTML = hexcode_2
}

// Click Eventlistener For Each 'Change Colour' Button
for (let i = 0; i < changeColourBtns.length; i++) {
  changeColourBtns[0].addEventListener("click", changeIndividualColours_1)
  changeColourBtns[1].addEventListener("click", changeIndividualColours_2)
  changeColourBtns[2].addEventListener("click", changeIndividualColours_3)
}

// Click Eventlistener For Mobile Layout (Generate Button)
generateBtnMobile.addEventListener("click", function () {
  changeAllColours()
})

// Click Eventlistener Desktop Layout (Push Spacebar)
document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    changeAllColours()
  }
})
