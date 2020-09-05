//  section1

const slider = tns({
    container: '.my-slider',
    axis: 'horizontal',
    items: 1,
    nav: true,
    navPosition: 'bottom',
    autoplay: false,
    swipeAngle: false,
    controls: false,
})

// section3

let learnMoreBtnText = document.getElementById('learnMoreBtn')
let learnMoreText = document.getElementById('learnMore')

let dots1 = document.getElementById('dots1')
let continueReading1BtnTxt = document.getElementById('continueReading1Btn')
let continueReading1Text = document.getElementById('continueReading1')

let dots2 = document.getElementById('dots2')
let continueReading2BtnTxt = document.getElementById('continueReading2Btn')
let continueReading2Text = document.getElementById('continueReading2')

function learnMoreFun() {
    if (learnMoreText.style.display === 'none') {
        learnMoreBtnTxt.innerHTML = 'Learn more'
        learnMoreText.style.display = 'none'
    } else {
        learnMoreBtnText.innerHTML = 'less'
        learnMoreText.style.display = 'inline'
    }
}

function continueReading1Fun() {
    if (continueReading1Text.style.display === 'none') {
        dots1.style.display = 'inline'
        continueReading1BtnTxt.innerHTML = 'continue reading'
        continueReading1Text.style.display = 'none'
    } else {
        dots1.style.display = 'none'
        continueReading1BtnTxt.innerHTML = 'Less'
        continueReading1Text.style.display = 'inline'
    }
}

function continueReading2Fun() {
    if (continueReading2Text.style.display === 'none') {
        dots2.style.display = 'inline'
        continueReading2BtnTxt.innerHTML = 'continue reading'
        continueReading2Text.style.display = 'none'
    } else {
        dots2.style.display = 'none'
        continueReading2BtnTxt.innerHTML = 'Less'
        continueReading2Text.style.display = 'inline'
    }
}
