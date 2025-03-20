var menubar1 = document.getElementById("menubar1");
var sidebar1 = document.getElementById("sidebar1");
var sidebarclosebtn = document.getElementById("sidebarclosebtn1");

menubar1.addEventListener("click", () => {
    sidebar1.style.left = "0";
})

sidebarclosebtn .addEventListener("click", () => {
    sidebar1.style.left = "-50%";
})
