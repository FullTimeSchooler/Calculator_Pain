function display(value) {
    document.getElementById("answer").value += value
}

function clr() {
    document.getElementById("answer").value = ""
}

let calculate = document.getElementById("cal");

function math(equation) {
    if ($("one").val() === "1" || $("two").val === "2"
        || $("three").val() === "3" || $(four).val() === "4"
        || $(five).val() === "5" || $(six).val() === "6"
        || $(seven).val() === "7" || $(eight).val === "8"
        || $(nine).val === "9" || $(plus).val === "+" || $(minus).val() === "-"
        || $(multiply).val === "*" || $(division).val === "/" || $(decimal).val() === ".")
        document.getElementById("answer").value += variables;
}