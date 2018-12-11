const clock = document.querySelector(".js-clock .clock-text");

function addZero(num) {
    return num < 10 ? `0${num}` : num;
}

function getTime() {
    const date = new Date();
    const minutes = addZero(date.getMinutes());
    const hours = addZero(date.getHours());
    const seconds = addZero(date.getSeconds());
    clock.innerHTML = `${hours}:${minutes}<span>${seconds}</span>`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();
