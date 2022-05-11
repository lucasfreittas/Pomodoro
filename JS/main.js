import * as buttons from "./buttons.js"
import * as controls from "./controls.js"
import * as countdown from "./countdown.js"


buttons.play.addEventListener("click", function(){
    controls.play()
    controls.watch()
    countdown.play()
})

buttons.pause.addEventListener("click", function(){
    controls.pause()
    countdown.pause()
})

buttons.stop.addEventListener("click", function(){
    controls.stop()
    controls.pause()
    countdown.stop()
})

buttons.watch.addEventListener("click", function(){
   countdown.watch()
 
})

buttons.plusTime.addEventListener("click", function(){
    countdown.plusFive()
    controls.play()
    controls.watch()

})

buttons.minusTime.addEventListener("click", function(){
    countdown.minusFive()
    controls.play()
    controls.watch()
})

buttons.florest.addEventListener("click", function(){
    console.log("fala zé")
})

buttons.rain.addEventListener("click", function(){
    console.log("updating test")
})

buttons.coffe.addEventListener("click", function(){
    console.log("TEste")
})

buttons.fireplace.addEventListener("click", function(){
    console.log("Teste")
})