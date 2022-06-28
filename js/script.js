const images = ["img/img/01.jpg", "img/img/02.jpg", "img/img/03.jpg", "img/img/04.jpg", "img/img/05.jpg", "img/img/06.jpg", "img/img/07.jpg", "img/img/08.jpg", "img/img/09.jpg", "img/img/10.jpg"]

const gallery = document.getElementById(`gallery`)

let sorce = ``

for (let i = 0; i < images.length; i++) {
    sorce += `<img src="img/img/${i + 1}.jpg"alt="">`
}

gallery.innerHTML = sorce


const prev = document.getElementById(`prev`)
const next = document.getElementById(`next`)

let image = document.querySelectorAll(`#gallery img`)

let active = 0

image[active].classList.add(`active`)

next.addEventListener(`click`, function () {
    image[active].classList.remove(`active`)

    active++


    if (active === image.length) {
        active = 0
    }


    image[active].classList.add(`active`)

})

prev.addEventListener(`click`, function () {
    image[active].classList.remove(`active`)

    active--

    if (active < 0) {
        active = image.length - 1
    }


    image[active].classList.add(`active`)
})



