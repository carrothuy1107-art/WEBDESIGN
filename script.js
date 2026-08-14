const button = document.getElementById("changeButton");

button.addEventListener("click", function () {
    document.querySelector("h1").style.color = "red";
});
const images = document.querySelectorAll(".yoasobiImage");

images.forEach(function(image) {

    image.addEventListener("click", function() {
        image.classList.toggle("zoom");
    });

});