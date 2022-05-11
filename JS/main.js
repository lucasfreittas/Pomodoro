import * as buttons from "./buttons.js"
import * as controls from "./controls.js"
import * as countdown from "./countdown.js"


buttons.play.addEventListener("click", function(){
    controls.play()
    controls.watch()
})

buttons.pause.addEventListener("click", function(){
    controls.pause()
})

buttons.stop.addEventListener("click", function(){
    controls.stop()
    controls.pause()
})

buttons.watch.addEventListener("click", function(){
   countdown.watch()
})

buttons.plusTime.addEventListener("click", function(){
    console.log("fala zé")
})

buttons.minusTime.addEventListener("click", function(){
    console.log("fala zé")
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