let display = document.getElementById("screen");

function memoryclear() {
    localStorage.removeItem("memory");
    document.getElementById("memoryclear").disabled = true;
    document.getElementById("memoryrecall").disabled = true;
}
function memoryrecall() {
    display.value = localStorage.getItem("memory");
}
function memoryplus() {
    display.value = eval(localStorage.getItem("memory") + "+" + display.value);
    localStorage.setItem("memory", display.value);
    document.getElementById("memoryclear").disabled = false;
    document.getElementById("memoryrecall").disabled = false;

}
function memoryminus() {
    display.value = eval(localStorage.getItem("memory") + "-" + display.value);
    localStorage.setItem("memory", display.value);
    document.getElementById("memoryclear").disabled = false;
    document.getElementById("memoryrecall").disabled = false;

}
function memorystore() {
    localStorage.setItem("memory", display.value);
    document.getElementById("memoryclear").disabled = false;
    document.getElementById("memoryrecall").disabled = false;

}
function trigonometry() {
    document.getElementById("myDropdown1").style.display = "block";
    document.getElementById("trigonometry").style.backgroundColor = "lightskyblue";
    document.getElementById("myDropdown2").style.display = "none";
    document.getElementById("function").style.backgroundColor = "#f3f3f3";
}
function sin() {
    display.value = Math.sin(display.value * Math.PI / 180).toFixed(2);
    
}
function cos() {
    display.value = Math.cos(display.value * Math.PI / 180).toFixed(2);
    
}
function tan() {
    display.value = Math.tan(display.value * Math.PI / 180).toFixed(2);

}
function specialfunction() {
    document.getElementById("myDropdown2").style.display = "block";
    document.getElementById("function").style.backgroundColor = "lightskyblue";
    document.getElementById("myDropdown1").style.display = "none";
    document.getElementById("trigonometry").style.backgroundColor = "#f3f3f3";
    
}
function abs() {
    display.value = Math.abs(display.value).toFixed(2);
}
function floor() {
    display.value = Math.floor(display.value);
}
function ceil() {
    display.value = Math.ceil(display.value);
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {

    if (!event.target.matches('.trigonometry')) {
        document.getElementById("myDropdown1").style.display = "none";
        document.getElementById("trigonometry").style.backgroundColor = "#f3f3f3";
    }

    if (!event.target.matches('.function')) {
        document.getElementById("myDropdown2").style.display = "none";
        document.getElementById("function").style.backgroundColor = "#f3f3f3";
    }
}

function deg() {
    display.value = ((180 / Math.PI) * display.value).toFixed(2);
}
function fe() {
    display.value = Number.parseFloat(display.value).toExponential();
}
function twopower(){
   display.value = Math.pow(2,display.value);
}
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
    display.value = (1 / display.value).toFixed(2);
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
    var fact = display.value;
    var f = 1;
    for (var i = 1; i <= fact; i++) {
        f = f * i;
    }
    display.value = f;
}
function pow() {
    if (display.value.length == 0) {
        display.value = 1;
    }
    else {
        display.value = Math.pow(10, display.value);
    }
}
function log() {
    display.value = Math.log10(display.value).toFixed(4);
}
function ln() {
    display.value = Math.log(display.value).toFixed(4);
}
function sign() {
    if (display.value.startsWith("-")) {
        display.value = display.value.substring(1);
    }
    else {
        display.value = "-" + display.value;
    }
}
function input(n) {
    display.value += n;
}

function calc() {
    display.value = eval(display.value);
}


