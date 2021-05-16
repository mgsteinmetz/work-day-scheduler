let currentDateTime = luxon.DateTime;
let dateTime = currentDateTime.now();
let container = [];

// setting current date and time using Luxon
$("#currentDay").text(dateTime.toLocaleString(currentDateTime.DATETIME_FULL));

// time storage
let storage = {
    '9': '',
    '10': '',
    '11': '',
    '12': '',
    '1': '',
    '2': '',
    '3': '',
    '4': '',
    '5': '',
    '6': '',
    '7': '',
}
if (JSON.parse(localStorage.getItem('event')) === null) {
    localStorage.setItem('event', JSON.stringify(storage));
} else {
    storage = JSON.parse(localStorage.getItem('event'));
}

// saving events
function storeText(event) {
    let object = $(event.target);
    object.siblings().eq(1).val();
    storage[object.attr("id")] = object.siblings().eq(1).val();
    localStorage.setItem("event", JSON.stringify(storage));
    return;
}

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