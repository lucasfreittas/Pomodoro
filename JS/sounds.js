
const florestSound = new Audio("./Sounds/Floresta.wav")
const rainSound  = new Audio("./Sounds/Chuva.wav")
const coffeSound  = new Audio("./Sounds/Cafeteria.wav")
const fireplaceSound  = new Audio("./Sounds/Lareira.wav")

export const playFlorest= () => {
    florestSound.play()
}

export const playRain= () => {
    rainSound.play()
}

export const playCoffe= () => {
    coffeSound.play()
}

export const playFireplace= () => {
    fireplaceSound.play()
}

export const stopSound= () => {
    florestSound.pause()
    fireplaceSound.pause()
    coffeSound.pause()
    rainSound.pause()
}