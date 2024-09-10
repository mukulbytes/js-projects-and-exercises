let cart = 0;

showqty();

function showqty() {
    const output = document.querySelector('.js-output');
    output.innerHTML = cart;
}

function updateCartQuantity(qty) {
    if (cart + qty > 10) {
        alert(`The cart is full`);
        return;
    }
    if (cart + qty < 0) {
        alert(`Not enough items in the cart`);
        return;
    }
    cart += qty;
    showqty();
}

function resetcart() {
    cart = 0;
    alert('Cart was reset');
    showqty();
}