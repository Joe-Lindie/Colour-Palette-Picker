// COLOUR SELECTOR

const pickColourBtns = document.getElementsByClassName("button")
//console.log(pickColourBtn)
const backgroundColour = document.getElementById("colour")
const newHexCode = document.getElementById("hex_colour")

const backgroundColour_1 = document.getElementById("colour_1")
const backgroundColour_2 = document.getElementById("colour_2")

//pickColourBtn.addEventListener("click", getNewColour)

// Click Eventlistener for each button
for (let i = 0; i < pickColourBtns.length; i++) {
  pickColourBtns[i].addEventListener("click", getNewColour)
  console.log(pickColourBtns[i])
}

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
}
