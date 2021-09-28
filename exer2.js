window.addEventListener("keydown", keyPressed)
window.addEventListener("keyup", keyReleased)
var snd1 = document.getElementById('sound1')
var snd2 = document.getElementById('sound2')
var snd3 = document.getElementById('sound3')
var snd4 = document.getElementById('sound4')
var snd5 = document.getElementById('sound5')

var boxy = document.getElementById('boxy')
var boxypos = {
    x:0,
    y:0
}
var keyList = []
var mul = 5

function keyPressed(evt){
    keyList[evt.keyCode] = true
    console.log(keyList)
    
    if(keyList[39]){
        boxypos.x += mul
    }
    if(keyList[37]){
        boxypos.x -= mul
    }
    if(keyList[38]){
        boxypos.y -= mul
    }
    if(keyList[40]){
        boxypos.y += mul
    }


    // switch(keyList[evt.keyCode]){
    //     case keyList[39]: //right
    //         boxypos.x += mul
    //         break;
    //     case keyList[37]: //left
    //         boxypos.x -= mul
    //         break;
    //     case keyList[38]: //up
    //         boxypos.y -= mul
    //         break;
    //     case keyList[40]: //down
    //         boxypos.y += mul
    //         break;
    // }

    // switch(evt.keyCode){
    //     case 39: //right
    //         boxypos.x += mul
    //         break;
    //     case 37: //left
    //         boxypos.x -= mul
    //         break;
    //     case 38: //up
    //         boxypos.y -= mul
    //         break;
    //     case 40: //down
    //         boxypos.y += mul
    //         break;
    // }

    console.log(boxypos)

    boxy.style.left = boxypos.x + 'px'
    boxy.style.top = boxypos.y + 'px'
}

function keyReleased(evt){
    delete keyList[evt.keyCode]
    console.log(keyList)
}