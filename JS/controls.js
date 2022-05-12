import * as buttons from "./buttons.js"

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

let selected 

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
        break;
        case 'rain':
            buttons.florest.classList.remove('selected')
            buttons.fireplace.classList.remove('selected')
            buttons.coffe.classList.remove('selected')
        break;
        case 'fireplace':
            buttons.rain.classList.remove('selected')
            buttons.florest.classList.remove('selected')
            buttons.coffe.classList.remove('selected')
        break;
        case 'coffe':
            buttons.rain.classList.remove('selected')
            buttons.fireplace.classList.remove('selected')
            buttons.florest.classList.remove('selected')
        break;

    }
}