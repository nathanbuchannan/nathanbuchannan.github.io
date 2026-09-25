var menuState = false;

$(document).ready(function() {
    $("#menuIcon").click(function() {
        if (menuState == false) {
            d("bar1").classList.add("bar1Active");
            d("bar2").classList.add("bar2Active");
            d("bar3").classList.add("bar3Active");
            d("navBar").classList.add("navOpen");
            d("object1").classList.remove("firstObj");
            d("object2").classList.remove("secondObj");
            d("object3").classList.remove("thirdObj");
            menuState = true;
        } else {
            d("bar1").classList.remove("bar1Active");
            d("bar2").classList.remove("bar2Active");
            d("bar3").classList.remove("bar3Active");
            d("navBar").classList.remove("navOpen");
            d("object1").classList.add("firstObj");
            d("object2").classList.add("secondObj");
            d("object3").classList.add("thirdObj");
            menuState = false;
        }
    })
})

var d = function(arg) {
    return document.getElementById(arg);
}