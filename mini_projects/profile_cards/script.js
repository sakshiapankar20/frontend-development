const images=["doremon.jpg","donald.jpg","dora.jpg","micky.jpg","bheem.jpg"];


let currentIndex=0;

function updateImg(){
   const imgElement=document.querySelector(".box img");
   imgElement.src=images[currentIndex];
}


function previousbtn(){
  currentIndex=(currentIndex-1+images.length) % images.length;
  updateImg();
}

function nextbtn(){
  currentIndex=(currentIndex+1)%images.length;
  updateImg();
}

updateImg();