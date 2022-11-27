// var minutesLabel = document.getElementById("minutes");
// var secondsLabel = document.getElementById("seconds");
// var totalSeconds = 0;
// setInterval(setTime, 1000);

// function setTime() {
//     ++totalSeconds;
//     secondsLabel.innerHTML = pad(totalSeconds % 60);
//     minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
// }

// function pad(val) {
//     var valString = val + "";
//     if (valString.length < 2) {
//         return "0" + valString;
//     } else {
//         return valString;
//     }
// }

// // reset() function
// function resetTimer() {
//     document.getElementById("minutes").innerHTML = "00";
//     document.getElementById("seconds").innerHTML = "00";
//     totalSeconds = 0;
// }

let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

let timerId; 

start.addEventListener('click', function() {
	let i = 0;
	
	timerId = setInterval(function() {
		console.log('!')
	}, 1000);
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
});

