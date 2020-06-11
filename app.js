var constructor = []
var column1
var column2
var column3
var column4
var column5
var column6
var column7

var col1cell7
var col1cell6
var col1cell5
var col1cell4
var col1cell3
var col1cell2
var col1cell1

var col2cell7
var col3cell7
var col4cell7
var col5cell7
var col6cell7
var col7cell7

var count = 0

//function clicked() {
//    for (var i = 0; i < constructor.length; i++) {
//    }
//}


function control1() {
    console.log("click ok test")
    count++
    console.log(count)
    if (count == 1) {
        col1cell7 = document.getElementById("column1-c7")
        col1cell7.style.background = 'red'
    } else
        if (count == 2) {
            col1cell6 = document.getElementById("column1-c6")
            col1cell6.style.background = 'red'
        } else
            if (count == 3) {
                col1cell5 = document.getElementById("column1-c5")
                col1cell5.style.background = 'red'
            } else
                if (count == 4) {
                    col1cell4 = document.getElementById("column1-c4")
                    col1cell4.style.background = 'red'
                } else
                    if (count == 5) {
                        col1cell3 = document.getElementById("column1-c3")
                        col1cell3.style.background = 'red'
                    } else
                        if (count == 6) {
                            col1cell2 = document.getElementById("column1-c2")
                            col1cell2.style.background = 'red'
                        } else
                            if (count == 7) {
                                col1cell1 = document.getElementById("column1-c1")
                                col1cell1.style.background = 'red'
                            }
}

function control2() {

    col2cell7 = document.getElementById("column2-c7")
    col2cell7.style.background = 'red'
}

function control3() {

    col3cell7 = document.getElementById("column3-c7")
    col3cell7.style.background = 'red'
}

function control4() {

    col4cell7 = document.getElementById("column4-c7")
    col4cell7.style.background = 'red'
}

function control5() {

    col5cell7 = document.getElementById("column5-c7")
    col5cell7.style.background = 'red'
}

function control6() {
    col6cell7 = document.getElementById("column6-c7")
    col6cell7.style.background = 'red'
}

function control7() {

    col7cell7 = document.getElementById("column7-c7")
    col7cell7.style.background = 'red'
}


window.onload = function () {

    //constructor = document.getElementsByClassName("column")
    column1 = document.getElementById("column1")
    column2 = document.getElementById("column2")
    column3 = document.getElementById("column3")
    column4 = document.getElementById("column4")
    column5 = document.getElementById("column5")
    column6 = document.getElementById("column6")
    column7 = document.getElementById("column7")

    column1.onclick = control1
    column2.onclick = control2
    column3.onclick = control3
    column4.onclick = control4
    column5.onclick = control5
    column6.onclick = control6
    column7.onclick = control6

    //console.log(constructor)
}
