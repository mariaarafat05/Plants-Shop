
// ================= BUTTON =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.onclick = function(){

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

}


// ================= SCROLL =================


const sections = document.querySelectorAll(".hidden");

function showSections() {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        const trigger = window.innerHeight * 0.8;

        if (sectionTop < trigger) {

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", showSections);

showSections();


// ================= SEARCH =================


const search = document.getElementById("search");
const searchIcon = document.getElementById("searchIcon");

searchIcon.onclick = function () {
    search.classList.toggle("active");
    search.focus();
}

const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".category-box");

searchInput.addEventListener("input", function () {

    const value = this.value.toLowerCase().trim();

    products.forEach(product => {

        const productName = product.dataset.name.toLowerCase();

        if (productName.includes(value)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

});


// ================= CART =================


const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(button => {

    button.addEventListener("click", () => {

        const product = {

            name: button.dataset.name,
            price: button.dataset.price,
            image: button.dataset.image

        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(product.name + " added to cart!");

    });

});