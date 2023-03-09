let display = document.getElementById("screen");


function pi() {
    if (display.value.length === 0) {
        display.value = Math.PI.toFixed(2);
    }
    else {
        display.value = (eval(display.value) * Math.PI).toFixed(2);
    }
}

function e() {
    var val = Math.exp(1);
    if (display.value.length === 0) {
        display.value = Math.exp(1).toFixed(2);
    }
    else {
        display.value = (eval(display.value) * val).toFixed(2);
    }
}
function allclear() {
    display.value = "";
}
function del() {
    display.value = display.value.slice(0, -1);
}

function square() {
    display.value = Math.pow(display.value, 2);
}

function inverse() {
    display.value = (1 / display.value).toFixed(3);
}

function abs() {
    display.value = Math.abs(display.value);
}
function exp() {
    display.value = Math.exp(display.value).toFixed(2);
}
function sqrt() {
    display.value = Math.sqrt(display.value).toFixed(2);
}
function factorial() {
}
function input(n) {
    display.value += n;
}

function calc() {
    display.value = eval(display.value);
}


