let products = [
    {
        id: 1,
        name: "Smart Tech",
        description: "Apple Mac Mini",
        image: "https://themes.pixelstrap.com/multikart/assets/images/electronics-1/product/1.jpg",
        price: 200
    },
    {
        id: 2,
        name: "Digital Haven",
        description: "Macbook Pro",
        image: "https://themes.pixelstrap.com/multikart/assets/images/electronics-1/product/2.jpg",
        price: 220
    },
    {
        id: 3,
        name: "Digital Gadgets",
        description: "Sound in Air",
        image: "https://themes.pixelstrap.com/multikart/assets/images/electronics-1/product/3.jpg",
        price: 110
    },
    {
        id: 4,
        name: "Gadgets Galaxy",
        description: "Playstation controller",
        image: "https://themes.pixelstrap.com/multikart/assets/images/electronics-1/product/4.jpg",
        price: 170
    },
    {
        id: 5,
        name: "Smart Gadgets",
        description: "Digital Smart Watch",
        image: "https://themes.pixelstrap.com/multikart/assets/images/electronics-1/product/5.jpg",
        price: 70
    },
    {
        id: 6,
        name: "Digital Earbuds",
        description: "Eve Outdoor Camp",
        image: "https://themes.pixelstrap.com/multikart/assets/images/electronics-1/product/6.jpg",
        price: 90
    },
    {
        id: 7,
        name: "Digital Lamp",
        description: "Klighten LED Lamp",
        image: "https://themes.pixelstrap.com/multikart/assets/images/electronics-1/product/7.jpg",
        price: 90
    },
    {
        id: 8,
        name: "Digital LED",
        description: "Smart LED TV",
        image: "https://themes.pixelstrap.com/multikart/assets/images/electronics-1/product/8.jpg",
        price: 90
    },
]

let productElement = document.getElementById("products");
let counter = document.getElementById("counter")
let productArr = JSON.parse(localStorage.getItem("cart")) || [];

counter.innerHTML = productArr.length;

function product(productId) {
    let item = products.find((obj) => {
        return productId == obj.id;
    });

    let productIdx = productArr.findIndex((obj) => {
        return productId == obj.id;
    })

    if (productIdx != -1) {
        productArr[productIdx].quantity++;
    } else {
        item.quantity = 1;
        productArr.push(item);
        Swal.fire({
            position: "bottom-end",
            icon: "success",
            title: "Product Added Succesfully",
            showConfirmButton: false,
            timer: 1500
          });
    }

    localStorage.setItem("cart", JSON.stringify(productArr));
    counter.innerHTML = productArr.length;
}

products.forEach((product, index) => {
    productElement.innerHTML += `
        <div class="col-lg-3 col-sm-6 col-12">
            <div class="basic-product product-card p-4 shadow">
                <div class="cursor"><img src="${product.image}" alt="" width="100%"></div>
                <div class="product-details">
                    <h2 class="mt-3 cursor">${product.name}</h2>
                    <p class="m-0 mb-2 cursor">${product.description}</p>
                    <div class="d-flex justify-content-between">
                        <span class="h6 cursor">$${product.price}</span>
                        <button class="btn btn-primary" onclick="product(${product.id})">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>      
    `
})