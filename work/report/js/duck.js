/**
 * Comments
 */
"use strict";

(function () {
    var element = document.getElementById("duck");

    element.addEventListener("click", function () {
        element.innerHTML = "<p>" + element.offsetLeft + "</p>";
        console.log("Duck clicked");
    });

    element.addEventListener("mouseover", function () {
        element.style.left = element.offsetLeft + 20 + "px";
        console.log(element.style.left);
        console.log(element.offsetLeft);
        console.log("Mouse over");
    });

    console.log(element);
    console.log("Duck ready");
})();
