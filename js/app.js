// Get the elements by their ID
var popupLink = document.getElementById("popup-link");
var popupWindow1 = document.getElementById("popup-window1");
var popupWindow2 = document.getElementById("popup-window2");
var popupWindow3 = document.getElementById("popup-window3");
var popupWindow4 = document.getElementById("popup-window4");
var popupWindow5 = document.getElementById("popup-window5");
var popupWindow6 = document.getElementById("popup-window6");

var nextButton = document.getElementById("next-button");
var yesButton = document.getElementById("yes-button");
var noButton = document.getElementById("no-button");
var closeButton = document.getElementById("close-button");

var yesButtonSize = 20; // Initial size of the yesButton

// Show the pop-up window when the link is clicked
popupLink.addEventListener("click", function (event) {
    event.preventDefault();
    popupLink.style.display = "none"
    popupWindow1.style.display = "block";
});

popupWindow1.addEventListener("click", function (event) {
    event.preventDefault();
    popupWindow1.style.display = "none"
    popupWindow2.style.display = "block";
});

popupWindow2.addEventListener("click", function (event) {
    event.preventDefault();
    popupWindow2.style.display = "none"
    popupWindow3.style.display = "block";
});

popupWindow3.addEventListener("click", function (event) {
    event.preventDefault();
    popupWindow3.style.display = "none"
    popupWindow4.style.display = "block";
});

popupWindow4.addEventListener("click", function (event) {
    event.preventDefault();
    popupWindow4.style.display = "none"
    popupWindow5.style.display = "block";
});

// Hide the pop-up window when the close button is clicked
yesButton.addEventListener("click", function () {
    popupWindow5.style.display = "none";
    popupWindow6.style.display = "block";
});

noButton.addEventListener("click", function (event) {
    yesButtonSize += 5; // Increase the size by 5 (you can adjust the value)
    yesButton.style.fontSize = yesButtonSize + "px";
});



