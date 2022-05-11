import * as buttons from "./buttons.js";

let minutesDisplay = buttons.minutes
let secondsDisplay = buttons.seconds


export let refreshDisplay = (minutes, seconds) => {
    minutesDisplay.textContent = minutes
}

export let watch = () => {
    let minutes = Number(prompt(`Quantos minutos você gostaria de se concentrar?`))
    refreshDisplay(minutes, 0)
    console.log(minutesDisplay)
}