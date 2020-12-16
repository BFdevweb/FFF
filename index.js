const menu = document.querySelector(".nav1");
const fermer = document.querySelector(".closed");
const container = document.querySelector(".container");

menu.addEventListener("click",function(){
container.classList.add("menu_ouvert");
});
  
fermer.addEventListener("click",function(){
container.classList.remove("menu_ouvert");
});



      // fonction slider !!!!!! 
let count = 0;
defilee();
      
function defilee() {
    let img = document.querySelectorAll("img");
    let i;
        
    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    count++;

    if (count > img.length) {
        count= 1
    }
    img[count-1].style.display = "block";
    setTimeout(defilee, 5000); 
}