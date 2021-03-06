var banner_li_1 = document.getElementById('first');
var banner_li_2 = document.getElementById('second');
var banner_li_3 = document.getElementById('third');

var defaultColor = 'black';
var selectedColor = 'rgb(80, 71, 71)';

var banner_img = document.getElementById('banner_img');

console.log(banner_img);

banner_li_1.onmouseover = function(e) {
  banner_img.style.backgroundImage = 'url(/images/HomePage/panerai-limonor-marina-1950-3days-automatic-dial-1000x600.jpg)';
  banner_li_1.style.backgroundColor = selectedColor;
  banner_li_2.style.backgroundColor = defaultColor;
  banner_li_3.style.backgroundColor = defaultColor;
  console.log('Ok');
};

banner_li_2.onmouseover = function(e) {
  banner_img.style.backgroundImage = 'url(images/HomePage/zenith-pilot-type-20-2017.jpg)';
  banner_li_1.style.backgroundColor = defaultColor;
  banner_li_2.style.backgroundColor = selectedColor;
  banner_li_3.style.backgroundColor = defaultColor;
  console.log('Ok');
};

banner_li_3.onmouseover = function(e) {
  banner_img.style.backgroundImage = 'url(https://static.mk.ru/upload/entities/2017/12/11/articles/facebookPicture/96/bc/a8/1f/fa11d832720331449b4d5cf559c4116d.jpg)';
  banner_li_1.style.backgroundColor = defaultColor;
  banner_li_2.style.backgroundColor = defaultColor;
  banner_li_3.style.backgroundColor = selectedColor;
  console.log('Ok');
};