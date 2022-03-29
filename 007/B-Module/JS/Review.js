
const ReviewBTN = document.querySelector(".icons");
const Modal = document.querySelector(".modal");

const Name = document.querySelector(".namee");
const Item = document.querySelector(".item");
const Place = document.querySelector(".place");
const Date = document.querySelector(".date");
const Stars = document.querySelector("#stars");
const StarsSpan = Stars.querySelector("span");
const Des = document.querySelector("#des");
const Img = document.querySelector(".img");

ReviewBTN.addEventListener("click", (e) => {
    OnModal();
})

function OnModal(){
    Modal.style.opacity = 1;
    Modal.style.zIndex = 999;
}function OffModal(){
    Modal.style.opacity = 0;
    Modal.style.zIndex = -999;
}

// 이름 한글 영어만 

Name.addEventListener("keyup", (e) => {
    e.target.value = e.target.value.replace(/[^ㄱ-힣a-zA-Z]/g, '');
})
Stars.addEventListener("mouseover", (e) => {
    StarsSpan.style.width = `${e.target.value * 10}%`
})
