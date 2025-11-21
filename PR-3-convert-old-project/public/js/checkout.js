let cart = JSON.parse(localStorage.getItem("cart")) || [];
let counter = document.getElementById("counter");
let cartBody = document.getElementById("cartBody");
let checkoutBtn = document.getElementById("checkout");
let totalAmount = document.getElementById("totalAmount");
let notFound = document.getElementById("imageNotFound");
let checkoutBody = document.getElementById("checkout-body");

function deleteItem(idx) {
    cart.splice(idx, 1);
    saveCart();
    displayCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart))
}

function updateQty(idx, value) {

    cart[idx].quantity += value;

    if (cart[idx].quantity == 0) {
        deleteItem(idx);
    } else {
        saveCart();
        displayCart();
    }

}

function clearAll(){
    localStorage.removeItem("cart");
}

function displayCart() {
    counter.innerHTML = cart.length;

    if (cart.length <= 0) {
        notFound.innerHTML = `
            <div>
                <div class="d-flex justify-content-center w-100" style="max-height: 500px; overflow: hidden;">
                    <img src="./assets/images/no product found.jpg" class="img-fluid" alt="notFound">
                </div>
                <div>
                    <h2 class="fs-1 text-center mt-3">No Product Found, please go and buy something..</h2>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-primary" onclick="window.location.href = './index.html'" >Buy something</button>
                    </div>
                </div>
            </div>
        `
        checkoutBtn.classList.add("d-none");
        cartBody.innerHTML = "";
        return;
    }

    let mainTotal = 0;

    cartBody.innerHTML = "";
    cart.forEach((item, idx) => {
        let subTotal = item.price * item.quantity;
        mainTotal = subTotal + mainTotal;
        totalAmount.innerHTML = mainTotal;

        cartBody.innerHTML += `
            <tr class="cart-1">
                <td class="cart-img">
                    <img src="${item.image}" class="img-fluid" alt="product-img">
                </td>
                <td class="text-body-secondary">${item.description}</td>
                <td>$${item.price}</td>
                <td>
                    <div class="qty-btn d-flex flex-column flex-sm-row align-items-center">
                        <button class="btn btn-line mb-2 mb-sm-0" onclick="updateQty(${idx}, -1)"><i class="fa-solid fa-minus"></i></button>
                        <span class="btn-line padding-qty rounded" >${item.quantity}</span>
                        <button class="btn btn-line" onclick="updateQty(${idx}, 1)"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </td>
                <td class="fs-4">$${subTotal}</td>
                <td class="fs-3">
                    <button class="btn btn-danger" onclick="deleteItem(${idx})">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        `
    });
}

displayCart()