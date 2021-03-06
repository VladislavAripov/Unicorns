$(document).ready(function(){
    $(".open").on("click",function () {
        var form = $(".form");
        form.removeClass("form--inactive");
        form.addClass("form--active");
        var wrapper = $(".wrapper");
        wrapper.addClass("opacity5");
        wrapper.removeClass("opacity10");
    })});