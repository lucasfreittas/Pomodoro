

const florestSound = new Audio("./Sounds/Floresta.wav")
const rainSound  = new Audio("./Sounds/Chuva.wav")
const coffeSound  = new Audio("./Sounds/Cafeteria.wav")
const fireplaceSound  = new Audio("./Sounds/Lareira.wav")

export const playFlorest= () => {
    florestSound.currentTime = 0;
    florestSound.play();
    florestSound.loop = true;
}

export const playRain= () => {
    rainSound.currentTime = 0;
    rainSound.play()
    rainSound.loop = true;
}

export const playCoffe= () => {
    coffeSound.currentTime = 0;
    coffeSound.play();
    coffeSound.loop = true;
}

export const playFireplace= () => {
    fireplaceSound.currentTime = 0;
    fireplaceSound.play()
    fireplaceSound.loop = true;
}

export const stopSound= () => {
    florestSound.pause()
    fireplaceSound.pause()
    coffeSound.pause()
    rainSound.pause()
}