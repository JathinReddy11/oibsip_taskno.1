let result = document.getElementById("result");

function display(num) {
    result.value += num;
}

function calculate() {
    try {
        result.value = eval(result.value);
    }
    catch (Error) {
        alert("Error");
    }
}

function Clear() {
    result.value = "";
}

function backspace() {
    result.value = result.value.slice(0, -1);
}