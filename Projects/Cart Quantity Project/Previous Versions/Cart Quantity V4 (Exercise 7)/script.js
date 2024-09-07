let cart = 0;

showqty();
function showqty() {
    console.log(`Cart quantity: ${cart}`);
}

function addToCartRevised(qty) {
    if (cart + qty <= 10) {
        cart += qty;
        showqty();
    }
    else {
        alert(`The cart is full`);
        return;
    }
}

function removeFormCartRevised(qty) {
    if (cart - qty >= 0) {
        cart -= qty;
        showqty();
    }
    else {
        alert(`Not enough items in the cart`);
        return;
    }
}

function resetcart() {
    cart = 0;
    alert('Cart was reset');
    showqty();
}


//Version 3 (Exercise 6) Code Below

// function addtocart() {
//     if (cart < 10) {
//         cart += 1;
//         showqty();
//     } else {
//         alert(`The cart is full`);
//     }
// }
// function addtwo() {
//     if (cart <= 8) {
//         cart += 2;
//         showqty();
//     } else {
//         alert(`The cart is full`);
//     }
// }
// function addthree() {
//     if (cart <= 7) {
//         cart += 3;
//         showqty();
//     } else {
//         alert(`The cart is full`);
//     }
// }
// function addfour() {
//     if (cart <= 6) {
//         cart += 4;
//         showqty();
//     } else {
//         alert(`The cart is full`);
//     }
// }
// function addfive() {
//     if (cart <= 5) {
//         cart += 5;
//         showqty();
//     } else {
//         alert(`The cart is full`)
//     }
// }


// function removeone() {
//     if (cart > 0) {
//         cart--;
//         showqty();
//     }
//     else {
//         alert(`Not enough items in the cart`);
//     }
// }
// function removetwo() {
//     if (cart > 1) {
//         cart -= 2;
//         showqty();
//     }
//     else {
//         alert(`Not enough items in the cart`);
//     }
// }
// function removethree() {
//     if (cart > 2) {
//         cart -= 3;
//         showqty();
//     }
//     else {
//         alert(`Not enough items in the cart`);
//     }
// }