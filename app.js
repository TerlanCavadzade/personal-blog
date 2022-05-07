let gotop = document.querySelector('#top')
gotop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

let hamburger = document.querySelector('.center')
let nav = document.querySelector('nav')
let links = document.querySelector('#links')
let a = document.querySelectorAll('.link')
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active')
    nav.classList.toggle('active')
    links.classList.toggle('active')
    for (let link of a) { link.classList.toggle('active') }
})

let readmore = document.querySelector("#readmorebtn")
let readdiv = document.querySelector("#readmore")
readmore.addEventListener("click", function () {
    readdiv.style.display = "block"
})
let close = document.querySelector(".close")
close.addEventListener("click", function () {
    readdiv.style.display = "none"
})

document.addEventListener('click', function (e) {
    if (e.target.id == "readmore") {
        readdiv.style.display = "none";
    }
})
let images = document.querySelectorAll("img")
for (img of images) {
    img.addEventListener("click", function () {
        let source = this.src
        console.log(source);
        document.querySelector("#showimg").src = source
        document.querySelector("#image").style.display = "flex"
    })
}
let closeimg = document.querySelector("#closeimg")
closeimg.addEventListener("click", function () {
    document.querySelector("#image").style.display = "none"
})

document.addEventListener('click', function (e) {
    if (e.target.id == "image") {
        document.querySelector("#image").style.display = "none"
    }
})