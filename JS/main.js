import * as buttons from "./buttons.js"
import * as controls from "./controls.js"
import * as countdown from "./countdown.js"
import * as sound from "./sounds.js"


buttons.play.addEventListener("click", function(){
    controls.play()
    controls.watch()
    countdown.play()
    countdown.error()
})

buttons.pause.addEventListener("click", function(){
    controls.pause()
    countdown.pause()
    countdown.error()
})

buttons.stop.addEventListener("click", function(){
    controls.stop()
    controls.pause()
    countdown.stop()
    countdown.error()
})

buttons.watch.addEventListener("click", function(){
   countdown.watch()
   
 
})

buttons.plusTime.addEventListener("click", function(){
    countdown.plusFive()
    controls.play()
    controls.watch()
    countdown.error()

})

buttons.minusTime.addEventListener("click", function(){
    countdown.minusFive()
    countdown.error()
})

buttons.florest.addEventListener("click", function(){
    
    controls.florest()
    controls.toggleClass()

})

buttons.rain.addEventListener("click", function(){
    controls.rain()
    controls.toggleClass()
})

buttons.coffe.addEventListener("click", function(){
    
    controls.coffe()
    controls.toggleClass()
})

buttons.fireplace.addEventListener("click", function(){
    controls.fireplace()
    controls.toggleClass()
})