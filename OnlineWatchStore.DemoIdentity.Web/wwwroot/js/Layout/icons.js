const basketIconId = "basketIcon";
const userIconId = "userIcon";

const vkIconId = "vkIcon";
const facebookIconId = "facebookIcon";
const instagramIconId = "instagramIcon";


const basketIconPath = "url(images/Layout/basket_ultra.ico)";
const basketHoverIconPath = "url(images/Layout/basket_ultra_hover.ico)";

const userIconPath = "url(images/Layout/user_ultra.ico)";
const userHoverIconPath = "url(images/Layout/user_ultra_hover.ico)";


const vkIconPath = "url(images/Layout/vk_ultra.ico)";
const vkHoverIconPath = "url(images/Layout/vk_ultra_hover.ico)";

const facebookIconPath = "url(images/Layout/facebook_ultra.ico)";
const facebookHoverIconPath = "url(images/Layout/facebook_ultra_hover.ico)";

const instagramIconPath = "url(images/Layout/instagram_ultra.ico)";
const instagramHoverIconPath = "url(images/Layout/instagram_ultra_hover.ico)";


var basketIcon = document.getElementById(basketIconId);
var userIcon = document.getElementById(userIconId);

var vkIcon = document.getElementById(vkIconId);
var facebookIcon = document.getElementById(facebookIconId);
var instagramIcon = document.getElementById(instagramIconId);

// basket icon's script
basketIcon.onmouseover = function(){
    basketIcon.style.backgroundImage = basketHoverIconPath;
}
basketIcon.onmouseleave = function(){
    basketIcon.style.backgroundImage = basketIconPath;
}

// user icon's script
userIcon.onmouseover = function(){
    userIcon.style.backgroundImage = userHoverIconPath;
}
userIcon.onmouseleave = function(){
    userIcon.style.backgroundImage = userIconPath;
}

// vk icon's script
vkIcon.onmouseover = function(){
    vkIcon.style.backgroundImage = vkHoverIconPath;
}
vkIcon.onmouseleave = function(){
    vkIcon.style.backgroundImage = vkIconPath;
}

// facebook icon's script
facebookIcon.onmouseover = function(){
    facebookIcon.style.backgroundImage = facebookHoverIconPath;
}
facebookIcon.onmouseleave = function(){
    facebookIcon.style.backgroundImage = facebookIconPath;
}

// instagram icon's script
instagramIcon.onmouseover = function(){
    instagramIcon.style.backgroundImage = instagramHoverIconPath;
}
instagramIcon.onmouseleave = function(){
    instagramIcon.style.backgroundImage = instagramIconPath;
}