import * as buttons from "./buttons.js";

let minutesDisplay = buttons.minutes
let secondsDisplay = buttons.seconds
let looping;
let newMinutes;

export let refreshDisplay = (minutes, seconds) => {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

export let watch = () => {
    newMinutes = Number(prompt(`Quantos minutos você gostaria de se concentrar?`))
    let seconds = secondsDisplay.textContent
    refreshDisplay(newMinutes, seconds)
    return newMinutes
}


export let play = () => {
   let seconds = Number(secondsDisplay.textContent)
   let minutes = Number(minutesDisplay.textContent)
   
  looping = setTimeout(function(){
    seconds = seconds - 1

    if(seconds < 0){
        seconds = 59
        minutes = minutes -1
    }else if(minutes == 0 && seconds == 0){
        refreshDisplay(minutes, seconds)
        return
    }

    refreshDisplay(minutes, seconds)


    play()

   }, 1000)

}

export let pause = () => {
    clearTimeout(looping)
}

export let stop = () => {
    clearTimeout(looping)
    refreshDisplay(newMinutes, 0)
}

export let plusFive = () => {
    pause()
    newMinutes = Number(minutesDisplay.textContent) + 5
    let seconds = secondsDisplay.textContent
    refreshDisplay(newMinutes, seconds)
    play()
    
}

export let minusFive = () => {
    pause()
    newMinutes = Number(minutesDisplay.textContent) - 5
    let seconds = secondsDisplay.textContent
    refreshDisplay(newMinutes, seconds)
    play()
    
}
