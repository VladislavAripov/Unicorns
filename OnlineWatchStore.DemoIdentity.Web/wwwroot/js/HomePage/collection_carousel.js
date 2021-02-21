var collectionWrapperArray = document.getElementsByName('');

var sumWidth = 0;
for (var i = 0; i < collectionWrapperArray.length; i++)
{
    sumWidth += collectionWrapperArray.style.width;
}

console.log(sumWidth);