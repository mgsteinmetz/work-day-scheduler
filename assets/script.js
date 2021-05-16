let currentDateTime = luxon.DateTime;
let container = [];

// setting current date and time using Luxon
let dateTime = currentDateTime.now();
$("#currentDay").text(dateTime.toLocaleString(currentDateTime.DATETIME_FULL));

// setting color to saved events
for (i in container) {
    container[i].on("click", "button", storeText);
    if (parseInt(i) + 9 < dateTime.hour) {
        container[i].children().eq(1).css({"background-color": "red", "color": "white"});
    } else if (parseInt(i) + 9 === dateTime.hour) {
        container[i].children().eq(1).css({"background-color": "green", "color": "white"});
    } else if (parseInt(i) + 9 > dateTime.hour) {
        container[i].children().eq(1).css({"background-color": "#0084ff", "color": "black"});
    }
}

// setting color to past, present, and future timeblocks
interval = setInterval(function() {
    dateTime = currentDateTime.now();
    $("#currentDay").text(dateTime.toLocaleString(currentDateTime.DATETIME_FULL));
    for (i in container) {
        if (parseInt(i) + 9 < dateTime.hour) {
            container[i].children().eq(1).css({"background-color": "red", "color": "white"});
        } else if (parseInt(i) + 9 === dateTime.hour) {
            container[i].children().eq(1).css({"background-color": "green", "color": "white"});
        } else if (parseInt(i) + 9 > dateTime.hour) {
            conatiner[i].children().eq(1).css({"background-color": "blue", "color": "white"});
        }
    }
    return;
}, 1000)