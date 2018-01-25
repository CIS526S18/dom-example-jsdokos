var days = 0;
var hours = 0;
var minutes = 0;
var seconds = 0;

var message = "In " + days + " days " + hours + " hours " + minutes + "  minutes " + seconds + " seconds";

var clock = document.createElement('div');

clock.innerHTML = message;

var node = document.getElementById("all-university"); // look up by unique ID
node.appendChild(clock);