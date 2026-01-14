
// Creates modal object for showing images.
const modal = new bootstrap.Modal(document.getElementById("imageViewer"));
// Gets the div hosting the modalviewer
const modalImg = document.getElementById("modalImage");
// Gets all images
const images = document.getElementsByTagName("img");

function onClick(img){
    modalImg.src = img.src;
    modal.show();
}

function assignClickEvent(){

    for (let i = 0; i < images.length; i++){
        console.log(images[i].src);
        images[i].addEventListener("click", function() { onClick(images[i])});
    }
}

assignClickEvent();
