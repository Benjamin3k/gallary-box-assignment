"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Application to generate a slide show
      Author: Benjamin Serwadda; comp 123; 301409657
      Date:   

      Filename: js05_txt.js
*/
let currentImg = 1;

window.addEventListener("load", setupGallery);

function setupGallery() {
   let imageCount = imgFiles.length;
   let galleryBox = document.getElementById("galleryBox");
   let galTitle = document.createElement("h1");
   let galCounter = document.createElement("div");
   let galPrev = document.createElement("div");
   let galNext = document.createElement("div");
   let galPlay = document.createElement("div");
   let galImages = document.createElement("div");
   
   galleryBox.appendChild(galTitle);
   galTitle.id = "galTitle";
   galTitle.textContent = "Assignment 2 Slideshow";
   
   galleryBox.appendChild(galCounter);
   galCounter.id = "galCounter";
   
   galleryBox.appendChild(galPrev);
   galPrev.id = "galPrev";
   galPrev.innerHTML = "&#9664;";
   galPrev.onclick = showPrev;
   
   galleryBox.appendChild(galNext);
   galNext.id = "galNext";
   galNext.innerHTML = "&#9654;";
   galNext.onclick = showNext;
   
   galleryBox.appendChild(galPlay);
   galPlay.id = "galPlay";
   galPlay.innerHTML = "&#9199;";
   let timeID;
   galPlay.onclick=function(){
	   showNext();
	   timeID = window.setInterval(showNext,1500);
   }
   
   galleryBox.appendChild(galImages);
   galImages.id = "galImages";
   
   let isPlaying = false; 
   galPlay.onclick = function(){
	   if (!isPlaying){
		   timeID = window.setInterval(showNext,1500);
		   isPlaying = true;
		   galPlay.innerHTML = "&#9208;";
	   }else{
		   clearInterval(timeID);
		   isPlaying = false;
		   galPlay.innerHTML= "&#9199;";
	   }
   }
//	for (let i = 0; i < galCount; i++) {
   //   let image = document.createElement("img");
   //   image.src = imgFiles[i];
   //   image.alt = imgCaptions[i];
   //   image.onclick = createModal;
   //   galImages.appendChild(image);
	//}
	  function showNext(){
	   galImages.appendChild(galImages.firstElementChild);
	   (currentImg<galCount) ? currentImg++: currentImg=1;
	   galCounter.textContent  = currentImg + " / " + galCount;
	  }
	  function showPrev(){
		  galImages.appendChild(galImages.firstElementChild);
		  (currentImg>1)? currentImg--:currentImg = galCount;
		  galCounter.textContent = currentImg + " / " + galCount;
	  }
	  
	
function createOverlay() {
    let overlay = document.createElement("div");
    overlay.id = "galOverlay";

    let figureBox = document.createElement("figure");
    overlay.appendChild(figureBox);

    let overlayImage = this.cloneNode(true);
    figureBox.appendChild(overlayImage);

    let overlayCaption = document.createElement("figcaption");
    overlayCaption.textContent = this.alt;
    figureBox.appendChild(overlayCaption);

    let addToFavoritesButton = document.createElement("button");
    addToFavoritesButton.textContent = "Add to Favorites";
    addToFavoritesButton.onclick = addToFavorites;
    overlay.appendChild(addToFavoritesButton);

    let closeBox = document.createElement("div");
    closeBox.id = "galOverlayClose";
    closeBox.innerHTML = "&times;"; // This is the close symbol
    closeBox.onclick = function () {
        document.body.removeChild(overlay);
    };
    overlay.appendChild(closeBox);

    document.body.appendChild(overlay);

    function addToFavorites() {
        let currentImage = overlayImage.cloneNode(true);

        let favoritesList = document.getElementById("favoritesList");
        if (favoritesList.children.length >= 5) {
            alert("You can only add a maximum of 5 images to favorites.");
            return;
        }

        let favoriteImage = document.createElement("img");
        favoriteImage.src = currentImage.src;
        favoriteImage.alt = currentImage.alt;

        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            favoritesList.removeChild(favoriteImage);
            removeButton.parentNode.removeChild(removeButton);
        };

        favoritesList.appendChild(favoriteImage);
        favoritesList.appendChild(removeButton);
    }
}



	  
	  for(let i = 0; i <galCount; i++){
		  let image = document.createElement("img");
		  image.src= imgFiles[i];
		  image.alt = imgCaptions[i];
		  image.onclick = createOverlay;
		  galImages.appendChild(image);
	  }
	  
}
  
   function createModal() {
      let modalWindow = document.createElement("div");
      modalWindow.id = "activeModal";
      let figureBox = document.createElement("figure");
      modalWindow.appendChild(figureBox);
      
      let modalImage = this.cloneNode(true);
      figureBox.appendChild(modalImage);
      
      let figureCaption = document.createElement("figcaption");
      figureCaption.textContent = modalImage.alt;
      figureBox.appendChild(figureCaption);
      
      let closeBox = document.createElement("div");
      closeBox.id = "modalClose";
      closeBox.innerHTML = "&times;";
      closeBox.onclick = function() {
         document.body.removeChild(modalWindow);
      }
      
      modalWindow.appendChild(closeBox);
      
      document.body.appendChild(modalWindow);
   
   
}
