// Ici vous pouvez écrire du code JavaScript
const swipe = document.querySelectorAll(".swipe");
function swipeRight(index){
    for(let i = 0; i < swipe.length; i++){
        console.log(swipe[1]);
        if(i == index){
            if(swipe[i].style.width === "200px")
                swipe[i].style.width = "0px";
            else
                swipe[i].style.width = "200px";
        }else{
            swipe[i].style.width = "0px";
        
        }   
    }
}
