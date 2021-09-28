var slider = document.getElementById('slider-holder')
var sliderItem = document.getElementsByClassName('slider')
var sliderHopper = ""

var slideImages = [{
    url: "images/azzedine-rouichi-QYNH5L2fF9g-unsplash.jpg",
    title: "Some rocks", 
    subtitle: "Big rocks everywhere"
},
{
    url: "images/azzedine-rouichi-WegzQ1CY7eg-unsplash.jpg",
    title: "Canyon", 
    subtitle: "More rocks, weird shaped rocks"
},
{
    url: "images/federica-galli-V-MASKSq4vI-unsplash.jpg",
    title: "Mossy rocks", 
    subtitle: "Rocks, but greener"
},
{
    url: "images/toby-elliott-CaVBkPUSwM4-unsplash.jpg",
    title: "Hot rocks", 
    subtitle: "Rocks, but red and hot"
}
]

for(let i = 0; i < slideImages.length; i ++){
    var createSliderEle = document.createElement('div')
    createSliderEle.classList.add('slider')
    slider.appendChild(createSliderEle)

    var createSliderText = document.createElement('h1')
    createSliderText.innerHTML = slideImages[i].title
    sliderItem[i].appendChild(createSliderText)

    var createSliderText2 = document.createElement('h2')
    createSliderText2.innerHTML = slideImages[i].subtitle
    sliderItem[i].appendChild(createSliderText2)

    sliderItem[i].style.backgroundImage = `url(${slideImages[i].url})`
    // document.getElementsByClassName('title')[i].innerHTML = slideImages[i].title
    // document.getElementsByClassName('subtitle')[i].innerHTML = slideImages[i].subtitle
}

document.getElementById('container').style.width = `${(slideImages.length ) * 100}vw`

var position = 0

function moveSlider(num){
    position += num

    if(position == 100){
        position = (-slideImages.length * 100) + 100
    }

    if(position == (-slideImages.length * 100)){
        position = 0
    }

    slider.style.transform = `translateX(${position}vw)`
}

setInterval(function(){
    moveSlider(-100)
}, 3000);