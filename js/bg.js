const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
    const imageSrc = `./images/${imgNumber + 1}.jpg`;
    const bg = body.querySelector(".js-pageBg");
    bg.style.backgroundImage = `url('${imageSrc}')`;
    // image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
