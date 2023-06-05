// Ici vous pouvez écrire du code JavaScript
const swipe = document.querySelectorAll(".swipe");
const img = document.querySelectorAll(".img");
function swipeRight(index){
    for(let i = 0; i < swipe.length; i++){
        if(i == index){
            if(swipe[i].style.width === "200px"){
                swipe[i].style.width = "0px";
            }
            else
                swipe[i].style.width = "200px";

        }else{
            swipe[i].style.width = "0px";
        
        }   
    }
    for(let i = 0; i < img.length; i++){
        if(i == index){
            if(img[i].style.backgroundImage === "url('/images/color-image.jpg')"){
                img[i].style.backgroundImage = "url('/images/bw-image.jpg')"
            }
            else{
                img[i].style.backgroundImage = "url('images/color-image.jpg')"
            }
        }else{
            img[i].style.backgroundImage = "url('/images/bw-image.jpg')"
        }
    }
}
