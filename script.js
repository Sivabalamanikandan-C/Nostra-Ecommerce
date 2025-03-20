var closebtn = document.getElementById("closebtn");
var offerbar = document.getElementById("offer-bar");
var menubar = document.getElementById("menubar");
var sidebar = document.getElementById("sidebar");
var sidebarclosebtn = document.getElementById("sidebarclosebtn");

closebtn.addEventListener("click", () => {
    offerbar.style.display = "none";
})

menubar.addEventListener("click", () => {
    sidebar.style.left = "0";
})

sidebarclosebtn.addEventListener("click", () => {
    sidebar.style.left = "-50%";
})

const container = document.querySelector(".carousel-container");
const images = document.querySelectorAll(".carousel img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

function updateCarousel() {
    container.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % images.length;
    updateCarousel();
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);



document.addEventListener("DOMContentLoaded", function () {
    
    const favoriteIcons = document.querySelectorAll(".mostwantedfav");

    favoriteIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            if (this.src.includes("blackheart.png")) {
                this.src = "./img/Icons/redheart.png";
            } else {
                this.src = "./img/Products/blackheart.png";
            }
        });
    });
});