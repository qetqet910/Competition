// 필요한 엘리먼트들

const cards = document.querySelectorAll(".pan li");
const timeover = document.querySelector("#time");
const collected = document.querySelector("#collect");
const startBtn = document.querySelector(".bottom button:nth-child(1)")
const hintBtn = document.querySelector(".bottom button:nth-child(2)")

// 게임 상태
let gameStatus = false;

let timer;
let count;

// 난수 생성 함수
const CreateRandom = (min, max) => {
    let random = Math.floor(Math.random() * (max - min + 1));
    return random
}
// 타이머 설정 함수
const setTimer = (Sec) => {
    setInterval(() => {
        let min = parseInt(Sec/60);
        let Se = Sec%60;
        Sec--;
    }, 1000);
}
console.log(setTimer(90))
// 게임 시작 함수
const gameStart = () => {
    gameStart = true;
}