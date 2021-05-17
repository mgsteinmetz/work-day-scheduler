let currentDateTime = luxon.DateTime;
let dateTime = currentDateTime.now();
let container = document.getElementsByClassName('container');
let save = document.getElementsByClassName('saveBtn');

// setting current date and time using Luxon
$("#currentDay").text(dateTime.toLocaleString(currentDateTime.DATETIME_FULL));

let hour8 = dateTime.set({hour: 8})
let hour9 = dateTime.set({hour: 9})
let hour10 = dateTime.set({hour: 10})
let hour11 = dateTime.set({hour: 11})
let hour12 = dateTime.set({hour: 12})
let hour1 = dateTime.set({hour: 13})
let hour2 = dateTime.set({hour: 14})
let hour3 = dateTime.set({hour: 15})
let hour4 = dateTime.set({hour: 16})
let hour5 = dateTime.set({hour: 17})
let hour6 = dateTime.set({hour: 18})
let hour7 = dateTime.set({hour: 19})

// Setting variables using id

let hour08 = document.getElementById('text-8')
let hour09 = document.getElementById('text-9')
let hour010 = document.getElementById('text-10')
let hour011 = document.getElementById('text-11')
let hour012 = document.getElementById('text-12')
let hour01 = document.getElementById('text-1')
let hour02 = document.getElementById('text-2')
let hour03 = document.getElementById('text-3')
let hour04 = document.getElementById('text-4')
let hour05 = document.getElementById('text-5')
let hour06 = document.getElementById('text-6')
let hour07 = document.getElementById('text-7')

// 8AM

if (hour8.hour < dateTime.hour) {
    hour08.style.backgroundColor = 'gray';
    hour08.style.color = 'white';
} else if (hour8.hour > dateTime.hour){
    hour08.style.backgroundColor = 'blue';
    hour08.style.color = 'white';
} else {
    hour08.style.backgroundColor = 'green';
}

// 9AM

if (hour9.hour < dateTime.hour) {
    hour09.style.backgroundColor = 'gray';
    hour09.style.color = 'white'
} else if (hour9.hour > dateTime.hour){
    hour09.style.backgroundColor = 'blue';
    hour09.style.color = 'white';
} else {
    hour09.style.backgroundColor = 'green';
}

// 10AM

if (hour10.hour < dateTime.hour) {
    hour010.style.backgroundColor = 'gray';
    hour010.style.color = 'white'
} else if (hour10.hour > dateTime.hour){
    hour010.style.backgroundColor = 'blue';
    hour010.style.color = 'white';
} else {
    hour010.style.backgroundColor = 'green';
}

// 11AM

if (hour11.hour < dateTime.hour) {
    hour011.style.backgroundColor = 'gray';
    hour011.style.color = 'white';
} else if (hour11.hour > dateTime.hour){
    hour011.style.backgroundColor = 'blue';
    hour011.style.color = 'white';
} else {
    hour011.style.backgroundColor = 'green';
}


// 12PM

if (hour12.hour < dateTime.hour) {
    hour012.style.backgroundColor = 'gray';
    hour012.style.color = 'white';
} else if (hour12.hour > dateTime.hour){
    hour012.style.backgroundColor = 'blue';
    hour012.style.color = 'white';
} else {
    hour012.style.backgroundColor = 'green';
}

// 1PM

if (hour1.hour < dateTime.hour) {
    hour01.style.backgroundColor = 'gray';
    hour01.style.color = 'white'
} else if (hour1.hour > dateTime.hour){
    hour01.style.backgroundColor = 'blue';
    hour01.style.color = 'white';
} else {
    hour01.style.backgroundColor = 'green';
}

// 2pm

if (hour2.hour < dateTime.hour) {
    hour02.style.backgroundColor = 'gray';
    hour02.style.color = 'white';
} else if (hour2.hour > dateTime.hour){
    hour02.style.backgroundColor = 'blue';
    hour02.style.color = 'white';
} else {
    hour02.style.backgroundColor = 'green';
}

// 3pm

if (hour3.hour < dateTime.hour) {
    hour03.style.backgroundColor = 'gray';
    hour03.style.color = 'white';
} else if (hour3.hour > dateTime.hour){
    hour03.style.backgroundColor = 'blue';
    hour03.style.color = 'white';
} else {
    hour04.style.backgroundColor = 'green';
}

// 4pm

if (hour4.hour < dateTime.hour) {
    hour04.style.backgroundColor = 'gray';
    hour04.style.color = 'white';
} else if (hour4.hour > dateTime.hour){
    hour04.style.backgroundColor = 'blue';
    hour04.style.color = 'white';
} else {
    hour04.style.backgroundColor = 'green';
}

// 5PM 

if (hour5.hour < dateTime.hour) {
    hour05.style.backgroundColor = 'gray';
    hour05.style.color = 'white';
} else if (hour5.hour > dateTime.hour){
    hour05.style.backgroundColor = 'blue';
    hour05.style.color = 'white';
} else {
    hour05.style.backgroundColor = 'green';
}
// 6pm

if (hour6.hour < dateTime.hour) {
    hour06.style.backgroundColor = 'gray';
    hour06.style.color = 'white';
} else if (hour6.hour > dateTime.hour){
    hour06.style.backgroundColor = 'blue';
    hour06.style.color = 'white';
} else {
    hour06.style.backgroundColor = 'green';
}

// 7pm

if (hour7.hour < dateTime.hour) {
    hour07.style.backgroundColor = 'gray';
    hour07.style.color = 'white';
} else if (hour7.hour > dateTime.hour){
    hour07.style.backgroundColor = 'blue';
    hour07.style.color = 'white';
} else {
    hour07.style.backgroundColor = 'green';
}

// on click event listener
const saveBtn = document.getElementsByClassName("saveBtn");

for (i of saveBtn) {
    i.addEventListener('click', function(event) {
        event.preventDefault();
        saveTask();
    })
}


const storage = window.localStorage;

// saving in Local Storage

function saveTask() {
    
storage.setItem("hour-8", hour08.value);
storage.setItem("hour-9", hour09.value);
storage.setItem("hour-10", hour010.value);
storage.setItem("hour-11", hour011.value);
storage.setItem("hour-12", hour012.value);
storage.setItem("hour-1", hour01.value);
storage.setItem("hour-2", hour02.value);
storage.setItem("hour-3", hour03.value);
storage.setItem("hour-4", hour04.value);
storage.setItem("hour-5", hour05.value);
storage.setItem("hour-6", hour06.value);
storage.setItem("hour-7", hour07.value);
}


let user = storage.getItem('hour-8')
hour08.innerHTML = user;  

hour09.innerHTML = storage.getItem('hour-9')
 
 hour010.innerHTML = storage.getItem('hour-10')

 hour011.innerHTML = storage.getItem('hour-11')
 
 hour012.innerHTML = storage.getItem('hour-12')
 
 hour01.innerHTML= storage.getItem('hour-1')
 
 hour02.innerHTML= storage.getItem('hour-2')

 hour03.innerHTML= storage.getItem('hour-3')

 hour04.innerHTML = storage.getItem('hour-4')

 hour05.innerHTML = storage.getItem('hour-5')

 hour06.innerHTML = storage.getItem('hour-6')

 hour07.innerHTML = storage.getItem('hour-7')