let num = 0;
let counter = document.getElementById("counter-value")

counter.innerText = "0"

function onAdd() {
    num += 1;
    counter.innerText = num;

    if (num == 0) {
        counter.style.color = "#000";

    }
    if (num > 0) {
        counter.style.color = "#a7c957"
    }
}

function onSubtract() {
    num -= 1;
    counter.innerText = num;

    if (num == 0) {
        counter.style.color = "#000"

    }
    if (num < 0) {
        counter.style.color = "#c1121f"
    }
}

function reset(){
    num=0;
    counter.innerText = num;
    counter.style.color = "#000"
}