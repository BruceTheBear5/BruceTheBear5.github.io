const hello = document.getElementById("Hello");
const arr = ["Hello", "Namaste", "Hola", "Konnichiwa", "Ciao", "Privyet"];
let current = 0;

function update(){
    hello.textContent = arr[current++];
    current %= arr.length;
}

setInterval(update, 5000);