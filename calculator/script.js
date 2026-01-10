const calInput = document.getElementById("calInput");
const clear = document.getElementById("clear");
const backspace = document.getElementById("delete");
const equal = document.getElementById("equal");

function appendValue(value) {
    calInput.value += value
    if (calInput.value.length >= 16 && calInput.value.length <= 23) {
        calInput.style.fontSize = "20px"
    } else if (calInput.value.length >= 23) {
        calInput.style.fontSize = "15px"
    }
    else {
        calInput.style.fontSize = "30px"
    }
}

clear.addEventListener("click", () => {
    calInput.value = ""
})

backspace.addEventListener("click", () => {
    calInput.value = calInput.value.slice(0, -1);
})

equal.addEventListener("click", () => {
    try {
        calInput.value = eval(calInput.value);
    } catch {
      calInput.value="Error..."
        setTimeout(() => {
            calInput.value = ""
        }, 1000);
    }
})