// in order to make the slider work
var element = document.querySelector(".container");
panzoom(element, {
    minZoom: 1,
    maxZoom: 1,
});

// when hover to navbar change the filter
var block = document.getElementsByClassName("block");
var navbar = document.getElementById("changeFilter");

navbar.onmouseover = function () {
    changeFilter();
};
navbar.onmouseout = function () {
    returnFilter();
};

function changeFilter() {
    var i;
    for (i = 0; i < block.length; i++) {
        block[i].style.filter = "grayscale(100%)";
    }
}

function returnFilter() {
    var i;
    for (i = 0; i < block.length; i++) {
        block[i].style.filter = "grayscale(0%)";
    }
}
