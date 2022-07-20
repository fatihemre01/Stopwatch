const startTimerBtn = document.getElementById("startTimer")
const pauseTimerBtn = document.getElementById("pauseTimer")
const resetTimerBtn = document.getElementById("resetTimer")
const timerDisplayDiv = document.querySelector(".timerDisplay");
let [hour,minute,second,milisecond] = [0,0,0,0]
let x;

startTimerBtn.addEventListener
("click", ()=> {
    startTimerBtn.disabled = true
    x = setInterval(displayTimer, 10)
})

function displayTimer() {
    milisecond+=10
    if(milisecond == 1000) {
        milisecond = 0
        second++
        if(second == 60) {
            second = 0
            minute++
            if(minute == 60) {
                minute = 0
                hour++
            }
        }
    }

    let h = hour < 10 ? "0" + hour: hour
    let m = minute < 10 ? "0" + minute: minute
    let s = second < 10 ? "0" + second: second
    let ms = milisecond < 10 ? "00" + milisecond:
    milisecond < 100 ? "0" + milisecond: milisecond

    timerDisplayDiv.innerHTML = `${h} : ${m} : ${s} : ${ms}`

}

pauseTimerBtn.addEventListener
("click", () => {
    startTimerBtn.disabled = false
    clearInterval(x)
})

resetTimerBtn.addEventListener
("click", () => {
    startTimerBtn.disabled = false
    clearInterval(x);
    [hour,minute,second,milisecond] = [0,0,0,0]
    timerDisplayDiv.innerHTML = "00 : 00 : 00 : 000"

})