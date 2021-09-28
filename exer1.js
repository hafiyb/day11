var buttonLeft = document.getElementById('button-left')
var buttonRight = document.getElementById('button-right')
var slider = document.getElementById('slider-holder')
var position = 0

// buttonRight.addEventListener("mousedown", rightClick)
// buttonLeft.addEventListener("mousedown", leftClick)

// function rightClick(){
//     position -= 100
//     if(position == -400){
//         position = 0
//     }
//     slider.style.transform = `translateX(${position}vw)`
// }

// function leftClick(){
//     position += 100
//     if(position == 100){
//         position = -300
//     }
//     slider.style.transform = `translateX(${position}vw)`
// }

setInterval(function(){
    moveSlider(-100)
}, 3000);

function moveSlider(num){
    position += num

    if(position == 100){
        position = -300
    }

    if(position == -400){
        position = 0
    }

    slider.style.transform = `translateX(${position}vw)`
}