const pickColourBtn = document.getElementById("button")
const backgroundColour = document.getElementById("colour")
const newHexCode = document.getElementById("hex_colour")

pickColourBtn.addEventListener("click", getNewColour)

//Generate new colour function
function getNewColour() {
  const hexCode = "0123456789ABCDEF"
  let colour = "#"

  for (let i = 0; i < 6; i++) {
    colour = colour + hexCode[Math.floor(Math.random() * 16)]
  }
  backgroundColour.style.background = colour
  newHexCode.innerText = colour
}
