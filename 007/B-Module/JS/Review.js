
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
const Cnt = document.querySelector(".cnt");
const close = document.querySelector(".close");
const addIMG = document.querySelector(".addIMG");
const Sub = document.querySelector(".sub");

Img.style.opacity = '0';
Img.style.zIndex = '-999'

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
function StarsGO(e){
    StarsSpan.style.width = `${e.value * 10}%`
    Cnt.innerText = e.value;
}
close.addEventListener("click", (e) => {
    setClose();
    OffModal();
})

function setClose(){
    Name.value = '';
    Item.value = '';
    Place.value = '';
    Date.value = '';
    Stars.value = 0;
    StarsSpan.style.width = '0%';
    Des.value = '';
    Cnt.innerText = 0;
    Img.value = '';
    Img.style.opacity = '0';
    Img.style.zIndex = '-999'
}

addIMG.addEventListener("click", (e) => {
    e.preventDefault();
    Img.style.opacity = '1';
    Img.style.zIndex = '999'
})

function fileChecking(obj){
    const extend = obj.value.substring(obj.value.lastIndexOf('.') + 1);
    if(extend === 'jpg'){

    }else{
        alert("확장자 : JPG 파일만 첨부할 수 있습니다.")
        obj.value = '';
    }
}

Sub.addEventListener('click', (e) => {
    if(Name.value.length > 1 && 50 > Name.value.length && Item.value != null){
        alert("­구매 후기가 등록되었습니다.")
        OffModal();
    }else{
        alert("올바르지 않은 값입니다 다시 한 번 확인해주십시오.")
    }
})