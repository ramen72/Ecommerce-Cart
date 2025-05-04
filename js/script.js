const products = [
    { id: 1, name: "Product 1", price: 19.99, image: "images/product-1.jpg", description: "A reliable and affordable product perfect for everyday use." },
    { id: 2, name: "Product 2", price: 29.99, image: "images/product-2.jpg", description: "High-quality item offering great performance and durability." },
    { id: 3, name: "Product 3", price: 15.49, image: "images/product-3.jpg", description: "Compact and convenient, ideal for travel or small spaces." },
    { id: 4, name: "Product 4", price: 22.00, image: "images/product-4.jpg", description: "Stylish and functional design that suits any lifestyle." },
    { id: 5, name: "Product 5", price: 18.75, image: "images/product-5.jpg", description: "A budget-friendly choice that doesn't compromise on quality." },
    { id: 6, name: "Product 6", price: 34.99, image: "images/product-6.jpg", description: "Premium-grade product built to last with superior materials." },
    { id: 7, name: "Product 7", price: 25.00, image: "images/product-7.jpg", description: "Balanced between price and performance for everyday tasks." },
    { id: 8, name: "Product 8", price: 12.95, image: "images/product-8.jpg", description: "Lightweight and easy to use, perfect for beginners." },
    { id: 9, name: "Product 9", price: 44.50, image: "images/product-9.jpg", description: "Top-of-the-line item with advanced features and sleek look." },
    { id: 10, name: "Product 10", price: 39.99, image: "images/product-10.jpg", description: "An excellent choice for those who value quality and design." }
];

let cart = [
    { id: 1, name: "Product 1", price: 19.99, image: "images/product-1.jpg", description: "A reliable and affordable product perfect for everyday use." },
    { id: 2, name: "Product 2", price: 29.99, image: "images/product-2.jpg", description: "High-quality item offering great performance and durability." },
    { id: 3, name: "Product 3", price: 15.49, image: "images/product-3.jpg", description: "Compact and convenient, ideal for travel or small spaces." },
    { id: 4, name: "Product 4", price: 22.00, image: "images/product-4.jpg", description: "Stylish and functional design that suits any lifestyle." },
    { id: 5, name: "Product 5", price: 18.75, image: "images/product-5.jpg", description: "A budget-friendly choice that doesn't compromise on quality." },
    { id: 6, name: "Product 6", price: 34.99, image: "images/product-6.jpg", description: "Premium-grade product built to last with superior materials." },
    { id: 7, name: "Product 7", price: 25.00, image: "images/product-7.jpg", description: "Balanced between price and performance for everyday tasks." },
    { id: 8, name: "Product 8", price: 12.95, image: "images/product-8.jpg", description: "Lightweight and easy to use, perfect for beginners." },
    { id: 9, name: "Product 9", price: 44.50, image: "images/product-9.jpg", description: "Top-of-the-line item with advanced features and sleek look." },
    { id: 10, name: "Product 10", price: 39.99, image: "images/product-10.jpg", description: "An excellent choice for those who value quality and design." }
];
const productList = document.querySelector(".product-list")
const cartItem = document.querySelector(".cart-items")
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
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
                `
        productList.appendChild(productDiv)
    })
}
function renderCard(){
    cartItem.innerHTML = "";
    if(cart.length === 0){
        // cartItem.innerHTML = `
        // <p>Your cart is empty</p>
        // `
        // cartTotal.innerHTML = "Total : $0.00"
        // checkoutButton.style.display = 'none'
    }else{
        cart.forEach(item =>{
            const cartItem = document.createElement('div')
            cartItem.classList.add('cart-item')
            cartItem.innerHTML = `
                    <div class="cart-item-info">
                        <h3>iPhone</h3>
                        <div class="quantity">
                            <button class="decrease">-</button>
                            <span>${item.name}</span>
                            <button class="increase">+</button>
                        </div>
                        <button class="remove">Remove</button>
                    </div>
            `
        })
    }
}

renderProducts()
renderCard()


// 30:51