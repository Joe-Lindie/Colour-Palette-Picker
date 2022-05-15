// COLOUR SELECTOR

const pickColourBtns = document.getElementsByClassName("button")
const generateBtnMobile = document.getElementById("generate")
const backgroundColour = document.getElementById("colour")
const backgroundColour_1 = document.getElementById("colour_1")
const backgroundColour_2 = document.getElementById("colour_2")

const newHexCode = document.getElementById("hex_colour")
const newHexCode_1 = document.getElementById("hex_colour_1")
const newHexCode_2 = document.getElementById("hex_colour_2")

// Click Eventlistener For Each Colour
for (let i = 0; i < pickColourBtns.length; i++) {
  pickColourBtns[i].addEventListener("click", getNewColour)
}

// Click Eventlistener For Spacebar
document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    getNewColour()
  }
})

// Click Eventlistener For Mobile Layout
generateBtnMobile.addEventListener("click", getNewColour)

//Generate New Colour Function
function getNewColour() {
  const hexCode = "0123456789ABCDEF"
  let colour = "#"
  let colour_1 = "#"
  let colour_2 = "#"

  for (let i = 0; i < 6; i++) {
    colour = colour + hexCode[Math.floor(Math.random() * 16)]
    colour_1 = colour_1 + hexCode[Math.floor(Math.random() * 16)]
    colour_2 = colour_2 + hexCode[Math.floor(Math.random() * 16)]
  }

  backgroundColour.style.background = colour
  backgroundColour_1.style.background = colour_1
  backgroundColour_2.style.background = colour_2
  newHexCode.innerText = colour
  newHexCode_1.innerText = colour_1
  newHexCode_2.innerText = colour_2
}
