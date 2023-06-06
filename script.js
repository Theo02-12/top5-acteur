// Ici vous pouvez écrire du code JavaScript
const swipe = document.querySelectorAll(".swipe");
const img = document.querySelectorAll(".img");
// Image de Imen Es colorée quand on arrive sur la page
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('imen').style.backgroundImage = "url('/images/color-image.jpg')";
});
// function pour changer la couleur de l'image et faire apparaitre la description de l'acteur
function swipeRight(index) {
    for (let i = 0; i < swipe.length; i++) {
        for (let i = 0; i < img.length; i++) {
            if (i == index) {
                if (swipe[i].style.width === "200px") {
                    swipe[i].style.width = "0px";
                    img[i].style.backgroundImage = "url('/images/bw-image.jpg')"
                }
                else {
                    swipe[i].style.width = "200px";
                    img[i].style.backgroundImage = "url('/images/color-image.jpg')";
                }
            }
            else {
                img[i].style.backgroundImage = "url('/images/bw-image.jpg')";
                swipe[i].style.width = "0px";
            }
        }
    }
}
