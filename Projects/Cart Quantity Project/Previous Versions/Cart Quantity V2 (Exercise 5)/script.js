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
function addfour() {
    cart += 4;
    showqty();
}
function addfive() {
    cart += 5;
    showqty();
}
function removeone() {
    cart--;
    showqty();
}
function removetwo() {
    cart -= 2;
    showqty();
}
function removethree() {
    cart -= 3;
    showqty();
}
function resetcart() {
    cart = 0;
    console.log('Cart was reset');
    showqty();
}