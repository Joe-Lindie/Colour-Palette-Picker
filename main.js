// COLOUR SELECTOR
const changeColourBtns = document.getElementsByClassName("button")
const generateBtnMobile = document.getElementById("generate")
const backgroundColours = document.querySelectorAll(".colour")
const newHexCode = document.getElementsByClassName("hex_colour")

//Generate New Colour Function
function getNewColour() {
  let hexCode = "0123456789ABCDEF"
  let hexColourCode = "#"

  for (let i = 0; i < 6; i++) {
    hexColourCode += hexCode[Math.floor(Math.random() * 16)]
  }
  return hexColourCode
}
//////////////////////////////////

//Change ALL colours Function
function changeAllColours() {
  backgroundColours.forEach((container) => {
    let newColour = getNewColour()
    container.style.backgroundColor = newColour
    container.querySelector(".hex_colour").innerHTML = newColour
  })
}

//Change INDIVIDUAL colours Function
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", function () {
    let newColour = getNewColour()
    button.parentElement.style.backgroundColor = newColour
    button.parentElement.querySelector(".hex_colour").innerHTML = newColour
  })
})
// On load, generate colours
changeAllColours()

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
