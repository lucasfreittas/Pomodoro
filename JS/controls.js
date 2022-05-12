import * as buttons from "./buttons.js"
import * as sound from "./sounds.js"
let selected;
let selectedMusic;

export const play = () => {
    buttons.play.classList.add('hide')
    buttons.pause.classList.remove('hide')
}

export const pause = () => {
    buttons.pause.classList.add('hide')
    buttons.play.classList.remove('hide')
}

export const watch = () => {
    buttons.watch.classList.add('hide')
    buttons.stop.classList.remove('hide')
}

export const stop = () => {
    buttons.stop.classList.add('hide')
    buttons.watch.classList.remove('hide')
}

export const timeless = () => {
    let body = document.querySelector('body')
    body.classList.add('timeless')
}

export const newTime = () => {
    let body = document.querySelector('body')
    body.classList.remove('timeless')
}


export const florest = () => {
    buttons.florest.classList.toggle('selected')
    selected = "florest"
}

export const rain = () => {
    buttons.rain.classList.toggle('selected')
    selected = "rain"
}

export const fireplace = () => {
    buttons.fireplace.classList.toggle('selected')
    selected = "fireplace"
}

export const coffe = () => {
    buttons.coffe.classList.toggle('selected')
    selected = "coffe"
}

export const toggleClass = () => {
    switch(selected){
        case 'florest':
            buttons.rain.classList.remove('selected')
            buttons.fireplace.classList.remove('selected')
            buttons.coffe.classList.remove('selected')
            sound.stopSound()
            sound.playFlorest()
        break;
        case 'rain':
            buttons.florest.classList.remove('selected')
            buttons.fireplace.classList.remove('selected')
            buttons.coffe.classList.remove('selected')
            sound.stopSound()
            sound.playRain()
        break;
        case 'fireplace':
            buttons.rain.classList.remove('selected')
            buttons.florest.classList.remove('selected')
            buttons.coffe.classList.remove('selected')
            sound.stopSound()
            sound.playFireplace()
        break;
        case 'coffe':
            buttons.rain.classList.remove('selected')
            buttons.fireplace.classList.remove('selected')
            buttons.florest.classList.remove('selected')
            sound.stopSound()
            sound.playCoffe()
        break;

    }
}

export const diselectAllClasses = () => {
            buttons.rain.classList.remove('selected')
            buttons.fireplace.classList.remove('selected')
            buttons.coffe.classList.remove('selected')
            buttons.florest.classList.remove('selected')
}

export const toggleMusic = () => {
    if(buttons.florest.classList.contains('selected')){
        sound.playFlorest()
    }else if(buttons.rain.classList.contains('selected')){
        sound.playFlorest()
    }else if(buttons.fireplace.classList.contains('selected')){
        sound.playFireplace()
    }else if(buttons.coffe.classList.contains('selected')){
        sound.playCoffe()
    }else{
        sound.stopSound()
    }
    
}