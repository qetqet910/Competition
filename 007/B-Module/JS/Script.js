// 필요한 엘리먼트들

const cards = document.querySelectorAll(".pan li");
const TimeCount = document.querySelector("#time");
const collected = document.querySelector("#collect");
const startBtn = document.querySelector(".bottom button:nth-child(1)")
const hintBtn = document.querySelector(".bottom button:nth-child(2)")

// .pan li:hover span:nth-of-type(1){
//     transform: rotateY(180deg)
// }
// .pan li:hover span:nth-of-type(2){
//     transform: rotateY(0deg)
// }
// .pan li:hover span:nth-of-type(2) span{
//     transform: rotateY(0deg) translate(-50%, -50%);
// }


// SetinTerval delay, callback 순서 변경
function setIntervalCus(Sec, CallBack) {

    CallBack();
  
    return setInterval(CallBack, Sec * 1000);
  
  }

// 게임 상태
let gameStatus = false;

// 맞힌 카드 수
let count = 0;

// 시간 제한
let Timeout = false;
let Stack = 0;

// 난수 생성 함수
const CreateRandom = (min, max) => {
    let random = Math.floor(Math.random() * (max - min + 1));
    return random
}

// 타이머 설정 함수
const setTimer = (Sec) => {

    let Fmin = String(parseInt(Sec/60)).padStart(2, '0');
    let FSe = String(Sec%60).padStart(2, '0');
    TimeCount.value = `${Fmin} : ${FSe}`;

    const Time = setIntervalCus(1, () => {
        let min = String(parseInt(Sec/60)).padStart(2, '0');
        let Se = String(Sec%60).padStart(2, '0');
        
        Sec--;

        TimeCount.value = `${min} : ${Se}`;
        if(min === "00" && Se === "00"){
            clearInterval(Time);
            AllCloseFC();
            setTimer(90);
            CardsStart();
            startBtn.innerText = "다시하기";
            Stack++;
            Timeout = false;
        }
    });
}

// 게임 시작 함수
const gameStart = () => {
    startBtn.value = "시작하기";
    count = 0;
    
    setTable();
    AllopenFC();
    setTimer(5);

    // startBtn.innerText = "다시하기";
}

// 카드 공개 함수
function AllopenFC(){
    cards.forEach(ele => {
        const front = ele.querySelector("span:nth-of-type(1)");
        const Back = ele.querySelector("span:nth-of-type(2)");  

        front.style.transform = `rotateY(180deg)`;
        Back.style.transform = `rotateY(0deg)`;
    })
}

function AllCloseFC(){
    cards.forEach(ele => {
        const front = ele.querySelector("span:nth-of-type(1)");
        const Back = ele.querySelector("span:nth-of-type(2)");  

        front.style.transform = `rotateY(0deg)`;
        Back.style.transform = `rotateY(180deg)`;
    })
}

// 카트 랜덤 배치 함수
function setTable(){     
    CardSIMG = [
        '거창군_사과.jpg','거창군_사과.jpg',
        '고성군_방울토마토.jpg','고성군_방울토마토.jpg',
        '김해시_단감.jpg','김해시_단감.jpg',
        '남해군_마늘.jpg','남해군_마늘.jpg',
        '밀양시_대추.jpg','밀양시_대추.jpg',
        '사천시_멸치.jpg','사천시_멸치.jpg',
        '산청군_약초.jpg','산청군_약초.jpg',
        '양산시_매실.jpg','양산시_매실.jpg',
        ];
    CardHOME = [
        '거창군', '거칭군',
        '고성군', '고성군',
        '김해시', '김해시',
        '남해군', '남해군',
        '밀양시', '밀양시',
        '사천시', '사천시',
        '산청군', '산천군',
        '양산시', '양산시',
    ]

    for(let i=0;i<16;i++) {
        let idx = CreateRandom(1,16-i);
        const Img = CardSIMG.splice(idx,1);
        const Home = CardHOME.splice(idx,1);
        
        cards[i].innerHTML = `<span></span><span><img src=img/특산품/${Img[0]} alt=${Home[0]}><span>${Home[0]}</span></span>`
    }
}

// 버튼 이벤트 리스너
startBtn.addEventListener('click', (e) => {
    gameStatus = true;
    if(gameStatus === true && Timeout === false){
        gameStart();
        Timeout = true;
    }    
})

function CardsStart(){
    let Cnt = 0;
    let EqualList = [];
    let SpanList = [];
    let Front = [];
    let Back = [];

    cards.forEach(ele => {    
        ele.addEventListener("click", (e) => {
            const front = e.target.childNodes[0];
            const back = e.target.childNodes[1];
            const span = e.target.childNodes[1].querySelector("span")
            Front.push(front);
            Back.push(back);

            // 배열에 이미지 경로 추가
        
            // if (EqualList.length !== setL.size && Cnt == 2){
            //     span.style.opacity = '1';
            //     EqualList = [];
            //     count++;
            // }

            if(Cnt !== 2){    
                front.style.transform = `rotateY(180deg)`;
                back.style.transform = `rotateY(0deg)`;

                EqualList.push(e.target.childNodes[1].querySelector("img").src)
                SpanList.push(span);
                Cnt++;
            }
            if(Cnt == 2 && EqualList.length == 2){
                if(EqualList[0] == EqualList[1]){
                    EqualList = [];
                    count++;
                    Cnt = 0;
                    setTimeout(() => {
                        SpanList.forEach(element => {
                            element.style.opacity = '1'; 
                        collected.value = count;
                    });
                        SpanList = [];
                    }, 1000);
                    Front = [];
                    Back = [];
                }else{
                    setTimeout(() => {
                        Front.forEach(ele => {
                            ele.style.transform = `rotateY(0deg)`;
                        })
                        Back.forEach(ele => {
                            ele.style.transform = `rotateY(180deg)`;
                        })

                        Front = [];
                        Back = [];
                        EqualList = [];
                        SpanList = [];
                        Cnt = 0;
                    }, 3000);
                }
            }
        })
    })
}

// 다시하기 버튼 함수
function restart(){
    if(startBtn.innerText === "다시하기" && Timeout === false){
        gameStart();        
    }
}