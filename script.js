var pianokey = document.getElementsByClassName('pianokey')
var sound = []
var keys =[]
var rainbow = false

window.addEventListener("keydown", keyPressed)

window.addEventListener("keyup", keyReleased)

setInterval(function(){
    if(rainbow == true){
        document.getElementById('laser').style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
        for(let i = 0;i < pianokey.length;i++){
            pianokey[i].style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
        }
    }
},500)


sound[0] = new Howl({
    src: ['audio/1.mp3'],
  });
sound[1] = new Howl({
    src: ['audio/2.mp3'],
  });
sound[2] = new Howl({
    src: ['audio/3.mp3'],
  });
sound[3] = new Howl({
    src: ['audio/4.mp3'],
  });
sound[4] = new Howl({
    src: ['audio/5.mp3'],
  });
sound[5] = new Howl({
    src: ['audio/6.mp3'],
  });
sound[6] = new Howl({
    src: ['audio/7.mp3'],
  });
sound[7] = new Howl({
    src: ['audio/8.mp3'],
  });
sound[8] = new Howl({
    src: ['audio/9.mp3'],
  });
sound[9] = new Howl({
    src: ['audio/laser.mp3'],
  });

function keyPressed(e){
    keys[e.keyCode] = true

    if(keys[65]){ //a
        console.log('A')
        sound[0].play()
    }
    if(keys[83]){ //s
        console.log('S')
        sound[1].play()
    }
    if(keys[68]){ //d
        console.log('D')
        sound[2].play()
    }
    if(keys[70]){ //f
        console.log('F')
        sound[3].play()
    }
    if(keys[71]){ //g
        console.log('G')
        sound[4].play()
    }
    if(keys[72]){ //h
        console.log('H')
        sound[5].play()
    }
    if(keys[74]){ //j
        console.log('J')
        sound[6].play()
    }
    if(keys[75]){ //k
        console.log('K')
        sound[7].play()
    }
    if(keys[76]){ //l
        console.log('L')
        sound[8].play()
    }
    if(keys[32]){ //l
        console.log('L')
        sound[9].play()
        rainbow = true
    }
}

setInterval(function(){
    if(keys[65]){ //a
        pianokey[0].style.transform = "translateY(10px)"
    } else pianokey[0].style.transform = "translateY(0px)"
    if(keys[83]){ //s
        pianokey[1].style.transform = "translateY(10px)"
    } else pianokey[1].style.transform = "translateY(0px)"
    if(keys[68]){ //d
        pianokey[2].style.transform = "translateY(10px)"
    } else pianokey[2].style.transform = "translateY(0px)"
    if(keys[70]){ //f
        pianokey[3].style.transform = "translateY(10px)"
    } else pianokey[3].style.transform = "translateY(0px)"
    if(keys[71]){ //g
        pianokey[4].style.transform = "translateY(10px)"
    } else pianokey[4].style.transform = "translateY(0px)"
    if(keys[72]){ //h
        pianokey[5].style.transform = "translateY(10px)"
    } else pianokey[5].style.transform = "translateY(0px)"
    if(keys[74]){ //j
        pianokey[6].style.transform = "translateY(10px)"
    } else pianokey[6].style.transform = "translateY(0px)"
    if(keys[75]){ //k
        pianokey[7].style.transform = "translateY(10px)"
    } else pianokey[7].style.transform = "translateY(0px)"
    if(keys[76]){ //l
        pianokey[8].style.transform = "translateY(10px)"
    } else pianokey[8].style.transform = "translateY(0px)"

},100)

function pianoclick(num){
    sound[num].play()
}

function rainbows(){
    console.log('test')
    rainbow = true
}

function keyReleased(e){
    delete keys[e.keyCode]

    keys[e.keycode]
}
