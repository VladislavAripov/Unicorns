document.onclick = function () {
    var deliveryOption = document.getElementsByName("delivery");
    for (var i = 0; i < deliveryOption.length; i++) {
        if (deliveryOption[i].checked == true) {
            document.getElementById("delivery selector").append(document.getElementById(deliveryOption[i].getAttribute("contentName")).content.cloneNode());
        }
    }
}