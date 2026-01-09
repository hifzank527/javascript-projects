// responsive menu

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close");

hamburger.addEventListener("click", () => {
    menu.style.display = "flex"
})
closeMenu.addEventListener("click", () => {
    menu.style.display = ""
})


// building product grid
const productGrid = document.getElementById("product-grid");
const products = [{
    title: "Black Sneakers", Img: "images/black-sneakers-with-white-sole.jpg", price: "14"
}, {
    title: "Black T-shirt", Img: "images/blackt-shirt.jpg", price: "11.3"
}, {
    title: "Blue T-shirt", Img: "images/blue-t-shirt.jpg", price: "9"
}, {
    title: "Make-Up brushes", Img: "images/bright-eye-makeup-brushes.jpg", price: "15"
}, {
    title: "Dark Blue T-shirts", Img: "images/darkBlueT-shirt.jpg", price: "17"
}, {
    title: "Galaxy Earring", Img: "images/galaxy-earrings.jpg", price: "22"
}, {
    title: "LaceupBlue Shoes", Img: "images/laceIpBlue shoes.jpg", price: "27"
}, {
    title: "MakeUp brush-set", Img: "images/makeup-brush-set.jpg", price: "30"
}, {
    title: "Modern-Time Watch", Img: "images/modern-time-pieces.jpg", price: "14"
}, {
    title: "Pink Sneaker", Img: "images/pinkSneakers.jpg", price: "40"
}, {
    title: "Red-Led Shoes", Img: "images/red-LED-shoes.jpg", price: "23.4"
}, {
    title: "Red Lipstick", Img: "images/reds-for-lips.jpg", price: "24"
}, {
    title: "Black Sneaker", Img: "images/right-foot-all-black-sneaker.jpg", price: "12"
}, {
    title: "Stacked Bracelet", Img: "images/stacked-bracelets.jpg", price: "23.3"
}, {
    title: "Black and white Watch", Img: "images/white-faced-watch.jpg", price: "23.2"
}, {
    title: "White T-shirt", Img: "images/whiteT-shirt.jpg", price: "17"
}, {
    title: "Wood-Leather Watch", Img: "images/wood-leather-watches.jpg", price: "19.4"
}, {
    title: "Wrist Watch", Img: "images/wrist-watches.jpg", price: "12"
},
]


let cartList = [];

function displayProduct(item) {
    productGrid.innerHTML = "";

    if (item.length === 0) {
        productGrid.innerHTML = `<p id="noProduct">No Product Found</p>`;
        return;
    }

    item.forEach((product, index) => {
        const div = document.createElement("div");
        div.className = "card"
        div.innerHTML = `<img src="${product.Img}" alt="product-img">
    <h2>${product.title}</h2>
    <p>Price: $${product.price}</p>
    <button onclick="addToCart(${index})">Add To Cart</button>`
        productGrid.appendChild(div)

    });
}
displayProduct(products);

const search = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

function renderProduct() {
    const searchText = search.value.toLowerCase()

    const filterProduct = products.filter(product =>
        product.title.toLocaleLowerCase().includes(searchText)
    )
    displayProduct(filterProduct)

}

search.addEventListener("keyup", renderProduct)

searchBtn.addEventListener("click", renderProduct);


//adding cart

const cart = document.getElementById("cart");
const cartBox = document.getElementById("cartBox");
const cartLists = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartClose = document.getElementById("close2");
const checkoutBtn = document.getElementById("checkoutBtn");
const checkoutBox = document.getElementById("checkoutBox");
const Ok = document.getElementById("Ok")

window.addEventListener("load", () => {
    const saveCart = localStorage.getItem("cart");
    if (saveCart) {
        const parsedCart = JSON.parse(saveCart);
        if (Array.isArray(parsedCart)) {
            cartList = parsedCart
        } else {
            cartList = []
            localStorage.removeItem("cart")
        }
    }
    displayCart()
})

cart.addEventListener("click", () => {
    cartBox.style.display = "flex"
    menu.style.display = ""
})
cartClose.addEventListener("click", () => {
    cartBox.style.display = ""
})

// cart finished

function addToCart(index) {
    cartList.push(products[index]);
    saveCart()
    displayCart()
}

function displayCart() {
    cartLists.innerHTML = ""
    let total = 0;
    cartList.forEach(item => {
        li = document.createElement("li");
        li.className = "cart-products";
        li.innerHTML = `${item.title} - $${item.price}`
        total += parseInt(item.price)
        cartLists.appendChild(li)
    })
    cartTotal.textContent = total
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cartList));
}

function clearCart() {
    localStorage.clear();
    cartLists.innerHTML = ""
    cartTotal.textContent = 0
}
