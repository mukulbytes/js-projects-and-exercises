let cart = 0;

function showqty() {
    console.log(`Cart quantity: ${cart}`);
}

function addtocart() {
    cart += 1;
    showqty();
}
function addtwo() {
    cart += 2;
    showqty();
}
function addthree() {
    cart += 3;
    showqty();
}
function resetcart() {
    cart = 0;
    console.log('Cart was reset');
    showqty();
}