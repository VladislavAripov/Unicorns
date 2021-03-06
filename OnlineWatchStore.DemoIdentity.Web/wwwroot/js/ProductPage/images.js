const otherImageId = 'other'; // other1, other2,.., other4
const mainImageId = 'main';

const selectedImage = 'selected';


var item1 = document.getElementById(otherImageId + 1);
var item2 = document.getElementById(otherImageId + 2);
var item3 = document.getElementById(otherImageId + 3);
var item4 = document.getElementById(otherImageId + 4);


var mainImage = document.getElementById(mainImageId);
var currentImageElement = item1;


item1.onmousedown = function(e) {
    if (mainImage.style.backgroundImage != item1.style.backgroundImage)
    {
        mainImage.style.backgroundImage = item1.style.backgroundImage;

        item1.classList.add(selectedImage);
        currentImageElement.classList.remove(selectedImage);

        currentImageElement = item1;
    }
}

item2.onmousedown = function(e) {
    if (mainImage.style.backgroundImage != item2.style.backgroundImage)
    {
        mainImage.style.backgroundImage = item2.style.backgroundImage;

        item2.classList.add(selectedImage);
        currentImageElement.classList.remove(selectedImage);

        currentImageElement = item2;
    }
}

item3.onmousedown = function(e) {
    if (mainImage.style.backgroundImage != item3.style.backgroundImage)
    {
        mainImage.style.backgroundImage = item3.style.backgroundImage;

        item3.classList.add(selectedImage);
        currentImageElement.classList.remove(selectedImage);

        currentImageElement = item3;
    }
}

item4.onmousedown = function(e) {
    if (mainImage.style.backgroundImage != item4.style.backgroundImage)
    {
        mainImage.style.backgroundImage = item4.style.backgroundImage;

        item4.classList.add(selectedImage);
        currentImageElement.classList.remove(selectedImage);

        currentImageElement = item4;
    }
}