 const slideShow = document.querySelector('.slideshow');
 
 //counter- array indexes!
 let i = 0;

 //Images Array
 let images = [
    "img/home_img1.jpg", 
    "img/home_img2.jpg", 
    "img/home_img3.jpg", 
    "img/home_img4.jpg"
 ];

 // Time: milliseconds

 let time = 3000;

 function changeImg(){
    slideShow.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
    
    setTimeout(changeImg, time);
 }

window.onload = changeImg();