function changeBtnStatus() {
    const buttonELement = document.querySelector('.js-subscribe-button');
    if (buttonELement.innerText === "Subscribe") {
        buttonELement.innerText = 'Subscribed';
    }
    else {
        buttonELement.innerText = 'Subscribe';
    }
}

function calculate() {
    const input = document.querySelector('.js-input');
    const output = document.querySelector('.js-output');
    if (Number(input.value) < 0) {
        output.innerHTML = `Error: cost cannot be less than $0`
        output.classList.add('error');
    }
    else {
        output.classList.remove('error');
        if (Number(input.value) < 40) {
            output.innerHTML = `$${Number(input.value) + 10}`;
        }
        else {
            output.innerHTML = `$${Number(input.value)}`;
        }
    }
}