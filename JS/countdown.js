import * as buttons from "./buttons.js";
import * as controls from "./controls.js";
import * as sound from "./sounds.js";

let minutesDisplay = buttons.minutes
let secondsDisplay = buttons.seconds
let looping;
let newMinutes;
let watchMinutes;

export let refreshDisplay = (minutes, seconds) => {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

export let watch = () => {
    watchMinutes = Number(prompt(`Quantos minutos você gostaria de se concentrar?`))
    let seconds = secondsDisplay.textContent
    refreshDisplay(watchMinutes, seconds)
    return watchMinutes
}


export let play = () => {
   let seconds = Number(secondsDisplay.textContent)
   newMinutes = Number(minutesDisplay.textContent)
   
  looping = setTimeout(function(){
    seconds = seconds - 1

    if(seconds < 0){
        seconds = 59
        newMinutes = newMinutes -1
    }else if(newMinutes == 0 && seconds == 0){
        refreshDisplay(newMinutes, seconds)
        sound.endTime()
        controls.stop()
        controls.timeless()
        pause()
    
        return
    }

    refreshDisplay(newMinutes, seconds)


    play()

   }, 1000)

}

export let pause = () => {
    clearTimeout(looping)
}

export let stop = () => {
    clearTimeout(looping)
    let minutes = watchMinutes
    refreshDisplay(minutes, 0)
}

export let plusFive = () => {
    pause()
    newMinutes = Number(minutesDisplay.textContent) + 5
    watchMinutes = Number(minutesDisplay.textContent) + 5
    let seconds = secondsDisplay.textContent
    refreshDisplay(newMinutes, seconds)
    play()
    
}

export let minusFive = () => {
    pause()
        newMinutes = Number(minutesDisplay.textContent) 
    if(newMinutes <= 5){
        pause()
        alert(`Acrescente mais tempo`)
        play()
        
    }else{
        newMinutes = Number(minutesDisplay.textContent) - 5
        watchMinutes = Number(minutesDisplay.textContent) - 5
        controls.play()
        controls.watch()
        let seconds = secondsDisplay.textContent
        refreshDisplay(newMinutes, seconds)
        play()
    }
    
}

export let error = () => {
    
    if(newMinutes <= 0){
        pause()
        controls.stop()
        controls.pause()
        alert(`Acrescente mais tempo`)
        return
    }
}