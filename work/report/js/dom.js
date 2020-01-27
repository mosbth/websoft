/**
 * A function to wrap it all in.
 */
(function () {
    "use strict";

    var element = document.getElementById("duck");

    element.addEventListener("mouseover", function() {
        console.log("Clicked duck");
        console.log(element.offsetLeft);
        element.style.left = element.offsetLeft + 10 + "px";
    })


    element.addEventListener("click", function() {
        element.innerHTML = element.innerHTML + "<p>MOPED</p>";
    });

    console.log("All ready.");
}());
