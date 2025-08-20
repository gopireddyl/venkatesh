const products = [
    { id: 1, name: "Spaker", price: 19.99, image: "https://i5.walmartimages.com/asr/0594674c-3c25-467d-9d9d-3f0bb4c4674f.81d58918542eb5406db7cb94277704e6.jpeg" },
    { id: 2, name: "Mouse", price: 29.99, image: "https://www.portronics.com/cdn/shop/files/Image1_5067bdd1-4473-4933-a66d-edcb4d49409a.png?v=1720258592" },
    { id: 3, name: "Sun glass", price: 39.99, image: "https://static.vecteezy.com/system/resources/previews/065/753/558/non_2x/pixel-art-illustration-black-sunglasses-pixelated-black-glasses-black-eye-sunglasses-fashion-icon-pixelated-for-the-pixel-art-game-and-icon-for-website-and-game-old-school-retro-free-vector.jpg" },
    { id: 4, name: "Laptop", price: 49.99, image: "https://media.istockphoto.com/id/1329119859/vector/pixel-art-laptop-computer.jpg?s=612x612&w=0&k=20&c=bb5diNm9SAe1oR3LlYs3emodufo6OQmxJrfpZovZ8Fw=" }
];

const cart = [];

const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const cartTotalBottom = document.getElementById('cart-total-bottom');
const checkoutBtn = document.getElementById('checkout-btn');

// Render products
products.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product');
    div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
});

// Add to cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

// Update cart display
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)} 
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(div);
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);
    cartTotalBottom.textContent = total.toFixed(2);
    checkoutBtn.disabled = cart.length === 0;
}

// Remove item
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Checkout
checkoutBtn.addEventListener('click', () => {
    alert('Checkout complete! Thank you for your purchase.');
    cart.length = 0;
    updateCart();
});
