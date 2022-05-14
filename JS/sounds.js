import * as buttons from "./buttons.js"

export const florestSound = new Audio("./Sounds/Floresta.wav")
export const rainSound  = new Audio("./Sounds/Chuva.wav")
export const coffeSound  = new Audio("./Sounds/Cafeteria.wav")
export const fireplaceSound  = new Audio("./Sounds/Lareira.wav")
export const clockAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

export const playFlorest= () => {
    florestSound.currentTime = 0;
    florestSound.play();
    florestSound.loop = true;
    florestSound.volume = buttons.florestVol.value;

}

export const playRain= () => {
    rainSound.currentTime = 0;
    rainSound.play()
    rainSound.loop = true;
    rainSound.volume = buttons.rainVol.value;

}

export const playCoffe= () => {
    coffeSound.currentTime = 0;
    coffeSound.play();
    coffeSound.loop = true;
    coffeSound.volume = buttons.coffeVol.value;

}

export const playFireplace= () => {
    fireplaceSound.currentTime = 0;
    fireplaceSound.play()
    fireplaceSound.loop = true;
    fireplaceSound.volume = buttons.fireVol.value;

}

export const stopSound = () => {
    clockAudio.pause();
    florestSound.pause()
    fireplaceSound.pause()
    coffeSound.pause()
    rainSound.pause()


}

export const endTime = () => {
    stopSound();
    clockAudio.currentTime = 0;
    clockAudio.play();
    clockAudio.loop = true;
    
}

export const newTime = () => {
    clockAudio.pause();
}

export const volume = (song, slider) => {
    song.volume = slider.value;
}