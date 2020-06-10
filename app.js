var constructor = []
var column1
var column2
var column3
var column4
var column5
var column6
var column7

function clicked() {
    for (var i = 0; i < constructor.length; i++) {
    }
}

function control() {
    console.log("clicked")
}

window.onload = function () {

    constructor = document.getElementsByClassName("column")

    column1 = document.getElementById("column1")
    column2 = document.getElementById("column2")
    column3 = document.getElementById("column3")
    column4 = document.getElementById("column4")
    column5 = document.getElementById("column5")
    column6 = document.getElementById("column6")
    column7 = document.getElementById("column7")

    column1.onclick = control()

    console.log(constructor)
}