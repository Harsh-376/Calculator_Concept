var num1, num2;
var expression;
var divide = document.getElementById("/");
var multiply = document.getElementById("*");
var add = document.getElementById("+");
var minus = document.getElementById("-");
var clear = document.getElementById("clear");
var rel = 0;

function get_input() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
}
function erase_input_history() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("history").value = expression;
}

minus.onclick = function () {
    get_input();
    expression = (num1 + " - " + num2);
    rel = num1 - num2;
    document.getElementById("result").value = rel;
    erase_input_history();
}
add.onclick = function () {
    get_input();
    expression = (num1 + " + " + num2);
    document.getElementById("result").value = (parseFloat(num1) + parseFloat(num2));
    erase_input_history();
}
multiply.onclick = function () {
    get_input();
    expression = (num1 + " * " + num2);
    document.getElementById("result").value = (num1 * num2);
    erase_input_history();
}
divide.onclick = function () {
    get_input();
    expression = (num1 + " / " + num2);
    document.getElementById("result").value = (num1 / num2);
    erase_input_history();
}
clear.onclick = function () {
    document.getElementById("result").value = "";
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("history").value = "";
}