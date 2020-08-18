const header = document.querySelector("header")


const easing = function (x) {
    return x * x * x
}

const fadeHeader = function () {
    const pixels = window.pageYOffset
    header.style.opacity = 1 - easing(pixels / 500)

    if (header.style.opacity < 0) {
        header.style.display = "none";
    } else {
        header.style.display = "grid";

    }
}



window.addEventListener("scroll", function () {
    fadeHeader()
})