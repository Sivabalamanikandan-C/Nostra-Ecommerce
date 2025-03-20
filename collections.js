var closebtn2 = document.getElementById("closebtn2");
var offerbar2 = document.getElementById("offer-bar2");
var menubar2 = document.getElementById("menubar2");
var sidebar = document.getElementById("sidebar2");
var sidebarclosebtn2 = document.getElementById("sidebarclosebtn2");

closebtn2.addEventListener("click", () => {
    offerbar2.style.display = "none";
})

menubar2.addEventListener("click", () => {
    sidebar2.style.left = "0";
})

sidebarclosebtn2.addEventListener("click", () => {
    sidebar2.style.left = "-50%";
})

var search = document.getElementById("search");
var productcontainer1 = document.getElementById("productcontainer");
var productlist = productcontainer1.querySelectorAll("div");
var noItemsMessage = document.getElementById("no-items");

search.addEventListener("keyup", (event) => {
    var enteredvalue = event.target.value.toUpperCase();

    var itemsFound = false;

    for (let count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("h2").textContent;

        if (productname.toUpperCase().indexOf(enteredvalue) == -1) {
            productlist[count].style.display = "none";
        }
        else {
            productlist[count].style.display = "block";

            var itemsFound = true;
        }
    }

    noItemsMessage.style.display = itemsFound ? "none" : "block";
})


document.addEventListener("DOMContentLoaded", ()=> {
    const checkboxes = document.querySelectorAll(".filter-section input[type='checkbox']");
    const products = document.querySelectorAll(".imgsectionitem");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", filterProducts);
    });

    function filterProducts() {
        let selectedFilters = {
            Occasion: [],
            Colors: [],
            Arrivals: []
        };

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const category = checkbox.parentElement.previousElementSibling.textContent.trim();
                selectedFilters[category].push(checkbox.value);
            }
        });

        let hasFilter = Object.values(selectedFilters).some(arr => arr.length > 0);

        products.forEach(product => {
            const productName = product.querySelector("h2").textContent;
            let matchesFilter = false;

            if (!hasFilter) {
                matchesFilter = true;
            } else {
                for (let category in selectedFilters) {
                    if (selectedFilters[category].some(filter => productName.includes(filter))) {
                        matchesFilter = true;
                        break;
                    }
                }
            }

            product.style.display = matchesFilter ? "block" : "none";
        });
    }
});