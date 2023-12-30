document.addEventListener('DOMContentLoaded', () => {

    let header = document.querySelector('header')

    document.addEventListener('scroll', (event) => {
        if (event.target.scrollingElement.scrollTop > 400) {
            header.classList.add("bg-white")
        } else {
            header.classList.remove("bg-white")
        }
    })

    let button = document.querySelector('header button')

    document.addEventListener('scroll', (event) => {
        if (event.target.scrollingElement.scrollTop > 400) {
            button.classList.add("bg-green")
        } else {
            button.classList.remove("bg-green")
        }
    })

    fadeInOutLetters()
})

function getRandomLetter() {
    const gStroke = document.querySelectorAll("g[stroke-linecap=butt]");
    let random = Math.floor(Math.random() * gStroke.length);
    let currentLetter = gStroke[random];

    return currentLetter;
}

function changeLetterOpacity() {
    let letter = getRandomLetter();
    let opacity = letter.getAttribute("opacity");

    if (opacity === "0") {
        letter.setAttribute("opacity", "1");
    } else {
        letter.setAttribute("opacity", "0");
    }
}

function fadeInOutLetters() {
    setInterval(() => {
        changeLetterOpacity();
    }, 50);
}