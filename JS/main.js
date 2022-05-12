import * as buttons from "./buttons.js"
import * as controls from "./controls.js"
import * as countdown from "./countdown.js"
import * as sound from "./sounds.js"


buttons.play.addEventListener("click", function(){
    controls.play()
    controls.watch()
    countdown.play()
    sound.newTime()
    controls.newTime()
    countdown.error()
})

buttons.pause.addEventListener("click", function(){
    controls.pause()
    countdown.pause()
    countdown.error()
    sound.newTime()
    controls.newTime()
})

buttons.stop.addEventListener("click", function(){
    controls.stop()
    controls.pause()
    countdown.stop()
    sound.newTime()
    controls.newTime()
    sound.stopSound()
    controls.diselectAllClasses()
})

buttons.watch.addEventListener("click", function(){
   countdown.watch()
   sound.newTime()
   controls.newTime()
   
 
})

buttons.plusTime.addEventListener("click", function(){
    countdown.plusFive()
    controls.play()
    controls.watch()
    countdown.error()
    sound.newTime()
    controls.newTime()

})

buttons.minusTime.addEventListener("click", function(){
    countdown.minusFive()
    countdown.error()
    sound.newTime()
    controls.newTime()
})

buttons.florest.addEventListener("click", function(){
    
    controls.florest()
    controls.toggleClass()
    controls.newTime()
    controls.toggleMusic()

})

buttons.rain.addEventListener("click", function(){
    controls.rain()
    controls.toggleClass()
    controls.newTime()
    controls.toggleMusic()
})

buttons.coffe.addEventListener("click", function(){
    
    controls.coffe()
    controls.toggleClass()
    controls.newTime()
    controls.toggleMusic()
})

buttons.fireplace.addEventListener("click", function(){
    controls.fireplace()
    controls.toggleClass()
    controls.newTime()
    controls.toggleMusic()
})