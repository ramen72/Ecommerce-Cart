const products = [
    { id: 1, name: "Product 1", price: 19.99, image: "images/product-1.jpg", description: "A reliable and affordable product perfect for everyday use." },
    { id: 2, name: "Product 2", price: 29.99, image: "images/product-2.jpg", description: "High-quality item offering great performance and durability." },
    { id: 3, name: "Product 3", price: 15.49, image: "images/product-3.jpg", description: "Compact and convenient, ideal for travel or small spaces." },
    { id: 4, name: "Product 4", price: 22.00, image: "images/product-4.jpg", description: "Stylish and functional design that suits any lifestyle." },
    { id: 5, name: "Product 5", price: 18.75, image: "images/product-5.jpg", description: "A budget-friendly choice that doesn't compromise on quality." },
    { id: 6, name: "Product 6", price: 34.99, image: "images/product-6.jpg", description: "Premium-grade product built to last with superior materials." },
    { id: 7, name: "Product 7", price: 25.00, image: "images/product-7.jpg", description: "Balanced between price and performance for everyday tasks." },
    { id: 8, name: "Product 8", price: 12.95, image: "images/product-8.jpg", description: "Lightweight and easy to use, perfect for beginners." },
    { id: 9, name: "Product 9", price: 44.50, image: "images/product-9.jpg", description: "Top-of-the-line item with advanced features and sleek look." }
];

let cart = [];
const productList = document.querySelector(".product-list")
const cartItems = document.querySelector(".cart-items")
const cartTotal = document.querySelector(".total")
const checkoutButton = document.querySelector(".checkout")


function renderProducts(){
    productList.innerHTML = "";
    products.forEach(product=>{
        const productDiv = document.createElement("div")
        productDiv.innerHTML = `
                <div class="product">
                    <img src=${product.image} alt="image">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>
                            ${product.description}
                        </p>
                        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
                `
        productList.appendChild(productDiv)
    })
}
function renderCart(){
    cartItems.innerHTML = "";
    
    if(cart.length === 0){
        cartItems.innerHTML = `
        <p>Your cart is empty</p>
        `
        cartTotal.innerHTML = "Total : $0.00"
        checkoutButton.style.display = 'none'
    }
    else{
        cart.forEach(item =>{
            const cartItem = document.createElement('div')
            cartItem.classList.add('cart-item')
            cartItem.innerHTML = `
                    <img src=${item.image} alt="image">
                    <div class="cart-item-info">
                        <h3>${item.name}</h3>
                        <p>Price : $${item.price.toFixed(2)} X ${item.quantity} = TK${(item.price.toFixed(2) * item.quantity).toFixed(2)}</p>
                        <div class="quantity">
                            <button class="decrease" data-id="${item.id}">-</button>
                            <span>${item.quantity}</span>
                            <button class="increase" data-id="${item.id}">+</button>
                        </div>
                        <button class="remove" data-id="${item.id}">Remove</button>
                    </div>
            `
            // <p>Price : $${item.price} X ${item.quantity} = TK${item.price * item.quantity}</p>
                        // <p>Price : ${item.price}</p>
            cartItems.appendChild(cartItem)
        })
    }
}

function addToCart(productId){
    const product = products.find(item => item.id === productId)
    const cardItem = cart.find(item => item.id === productId)

    if(cardItem){
        cardItem.quantity++;
    }else{
        cart.push({...product, quantity : 1});
    }
    renderCart()
}

function removeCart(productId) {
    cart = cart.filter(item => item.id !== productId)
    renderCart()
}

function changeQuantity(productId, change) {
    const cartItem = cart.find(item => item.id === productId);
    if( cartItem ){
        cartItem.quantity += change;
        if(cartItem.quantity <= 0){
            removeCart(productId);
        }else{
            renderCart()
        }
    }
}

productList.addEventListener("click", (e) =>{
    if(e.target.classList.contains("add-to-cart")){
        const productId = parseInt(e.target.dataset.id);
        addToCart(productId)
    }
    console.log(e.target.dataset.id)
})

cartItems.addEventListener("click", (e) => {
    if(e.target.classList.contains("remove")){
        console.log(e.target.classList)
        const productId = parseInt(e.target.dataset.id);
        removeCart(productId);
    }else if(e.target.classList.contains("increase")){
        console.log(e.target.classList)
        const productId = parseInt(e.target.dataset.id);
        changeQuantity(productId, 1)
    }else if(e.target.classList.contains("decrease")){
        const productId = parseInt(e.target.dataset.id);
        changeQuantity(productId, -1)
    }
})


renderProducts()
renderCart()


// 34:47