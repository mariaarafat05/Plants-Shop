const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let totalPrice = 0;

cart.forEach((product, index) => {

    totalPrice += Number(product.price);

    cartItems.innerHTML += `
    <div class="cart-box">

    <img src="${product.image}" alt="${product.name}">

    <div>
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
    </div>

    <button class="remove-btn" data-index="${index}">
        Remove
    </button>

    </div>
`;

});

total.innerHTML = `Total: $${totalPrice}`;


const removeButtons = document.querySelectorAll(".remove-btn");

removeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const index = button.dataset.index;

        cart.splice(index, 1);

        localStorage.setItem("cart", JSON.stringify(cart));

        location.reload();

    });

});


