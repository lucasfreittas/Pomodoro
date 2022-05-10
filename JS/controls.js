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
