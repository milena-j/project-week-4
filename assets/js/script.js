document.addEventListener('DOMContentLoaded', () => {

    let header = document.querySelector('header')
    
    document.addEventListener('scroll', (event) => {
        if(event.target.scrollingElement.scrollTop > 400) {
            header.classList.add("bg-white")
        } else {
            header.classList.remove("bg-white")
        }
    })

    let button = document.querySelector('header button')

    document.addEventListener('scroll', (event) => {
        if(event.target.scrollingElement.scrollTop > 400) {
            button.classList.add("bg-green")
        } else {
            button.classList.remove("bg-green")
        }
    })
})