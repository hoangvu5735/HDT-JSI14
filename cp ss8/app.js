
console.log(startButtons)
startButtons.forEach((button) => {
    const id = button.dataset.id;
    const obj = timers[id - 1];
    button.addEventListener("click", () => {
        setInterval(() => {
            obj.ms++;
            if (obj.ms == 1000) {
                obj.s++;
                obj.ms = 0;
            }
            if (obj.ms == 1000) {
                obj.s++;
                obj.ms = 0;
            }
            render(timerList[id - 1], id, obj)
        }, 1)
    })
})

function render(timer,id,obj){
    const minutes = obj.m <10 ?`0${obj.m}`:obj.m;
    const seconds = obj.s <10 ?`0${obj.s}`:obj.s;
}

























// function pad(val) {
//     valString = val + "";
//     if (valString.length < 2) {
//         return "0" + valString;
//     } else {
//         return valString;
//     }
// }

// totalSeconds = 0;
// function setTime(minutesLabel, secondsLabel) {
//     totalSeconds++;
//     secondsLabel.innerHTML = pad(totalSeconds % 60);
//     minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
// }

// function set_timer() {
//     minutesLabel = document.getElementById("minutes");
//     secondsLabel = document.getElementById("seconds");
//     my_int = setInterval(function () { setTime(minutesLabel, secondsLabel) }, 1000);
// }

// function stop_timer() {
//     clearInterval(my_int);
// }