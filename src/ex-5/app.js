function findGreaterNumber() {

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);


    if (num1 > num2) {
        document.getElementById("result").innerHTML = num1 + " es mayor que " + num2;
    } else if (num2 > num1) {
        document.getElementById("result").innerHTML = num2 + " es mayor que " + num1;
    } else {
        document.getElementById("result").innerHTML = "Ambos números son iguales";
    }
}
