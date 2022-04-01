// 필요한 엘리먼트들

const cards = document.querySelectorAll(".pan li");
const TimeCount = document.querySelector("#time");
const collected = document.querySelector("#collect");
const startBtn = document.querySelector(".bottom button:nth-child(1)")
const hintBtn = document.querySelector(".bottom button:nth-child(2)")

const modal = document.querySelector(".modal");
const Score = document.querySelector(".score");
const name = document.querySelector(".name");
const tel = document.querySelector(".tel");
const sub = document.querySelector(".sub");

let Time = null;
let Once = 0;

//////////////////////////////////////////////////////////////////



// 게임 상태
let gameStatus = false;
// 맞힌 카드 수
let count = 0;
// 시간 제한
let Timeout = false;
let Stack = 0;
// 버튼 후크
let I = 0;



//////////////////////////////////////////////////////////////////

// 게임 시작 함수
const gameStart = () => {
    // 점수 초기화
    InitCount();
    // 카드 랜덤 세팅
    SetCards();
    // 카드 열기
    AllopenFC();
    // 시간 제한 설정
    startTimer(5);
}

// SetinTerval delay, callback 순서 변경
const setIntervalCus = (Sec, CallBack) => {
    CallBack();
    return setInterval(CallBack, Sec * 1000);
}

// 타이머 설정 함수
const startTimer = (Sec) => { 
    let Fmin = String(parseInt(Sec/60)).padStart(2, '0');
    let FSe = String(Sec%60).padStart(2, '0');
    TimeCount.value = `${Fmin} : ${FSe}`;

    Time = setIntervalCus(1, () => {
        let min = String(parseInt(Sec/60)).padStart(2, '0');
        let Se = String(Sec%60).padStart(2, '0');
        
        Sec--;

        TimeCount.value = `${min} : ${Se}`;
        if(min === "00" && Se === "00" && Stack == 0){
            clearInterval(Time);
            AllCloseFC();
            startBtn.innerText = "다시하기"
            startTimer(90);
            Timeout = false;
            Stack++;
            CollCards();
            gameStatus = true;

            // 게임 종료
        }else if(min === "00" && Se === "00" && Stack == 1){
            EndGame();
            clearInterval(Time);
        }
    });
    gameStatus = true;
}

// 맞힌 카드 초기화
const InitCount = () => {
    count = 0;
    collected.value = count;
}

// 카드 전체 공개 함수
function AllopenFC(){
    cards.forEach(ele => {
        ele.classList.remove("closed");
        ele.classList.add("opened");
    })
}

// 카드 전체 숨기기 함수
function AllCloseFC(){
    cards.forEach(ele => {
        ele.classList.remove("opened");
        ele.classList.add("closed");
    })
}

// 피셔 에이츠 셔플 함수

const FisherYatesShuffle = (cnt, max, Box, IMG) => {
    for (let i = 0; i < cnt; i++) {
    let RanIMG = []
    RanIMG = IMG.splice(Math.floor(Math.random() * (max - i)), 1)[0];
    Box.push(RanIMG);
}}

function SetCards(){     

    const ListImgM = [];
    const ListRes = [];

    ImgList = [
        '거제시_유자.jpg', 
        '거창군_사과.jpg',
        '고성군_방울토마토.jpg',
        '김해시_단감.jpg',
        '남해군_마늘.jpg',
        '밀양시_대추.jpg',
        '사천시_멸치.jpg',
        '산청군_약초.jpg',
        '양산시_매실.jpg',
        '의령군_수박.jpg',
        '진주시_고추.jpg',
        '창녕군_양파.jpg',
        '창원시_풋고추.jpg',
        '통영시_굴.jpg',
        '하동군_녹차.jpg',
        '함안군_곶감.jpg',
        '함양군_밤.jpg',
        '합천군_돼지고기.jpg'
    ];
        
    // 피셔 에이츠 셔플 함수를 만듦
    // JSON.parse, stringify를 이용하여 deepcopy를 함
    // concat으로 합쳐주고 다시 셔플 함수로 섞어줌
    // 그걸 for문으로 풀어주고 ImgList 데이터에서 _ 기준
    // 시군을 추출하여 span, alt에 추가.

    FisherYatesShuffle(8, 16, ListImgM, ImgList);
    const TwinListImgM = JSON.parse(JSON.stringify(ListImgM));
    const OneMore = ListImgM.concat(TwinListImgM);
    FisherYatesShuffle(16, 16, ListRes, OneMore);

    for(let i = 0; i < 16; i++){
        const img = cards[i].querySelector("span:nth-of-type(2) img");
        const span = cards[i].querySelector("span:nth-of-type(2) span");
        const SpanAlt = ListRes[i].split('_');

        img.src = `img/특산품/${ListRes[i]}`;
        img.alt = `${SpanAlt[0]}`;
        span.innerText = `${SpanAlt[0]}`;
    }
}

// 버튼 이벤트 리스너
startBtn.addEventListener('click', (e) => {
    const InTe = e.target.innerText;

    if(InTe === "시작하기" && I == 0){
        gameStart();
        I = 1;
        setTimeout(() => {
            I = 0;
        }, 5000);
    }else if(InTe === "다시하기" & I == 0){
        DirtyClear();
        gameStart();
        I = 1;
        setTimeout(() => {  
            I = 0;
        }, 5000);
    }else{
        return ;
    }
})

// 힌트 보기 
hintBtn.addEventListener("click", (e) => {
    let ASDF = [];
    
    if(gameStatus === true){
        cards.forEach(ele => {
            if(ele.classList.value != "opened"){
                ASDF.push(ele)
            }
        });
        AllopenFC();
        setTimeout(() => {
            ASDF.forEach(ele => {
                ele.classList.remove("opened");
                ele.classList.add("closed");
            })
        }, 3000);
    }
})

// 카드 뒤집기 시작
function CollCards(){
    let My = '';
    let My1 = '';
    let COLL = [];
    let EA = [];

    if(My1 != ''){return};

    cards.forEach(ele => {
        ele.addEventListener("click", (e) => {
            My = e.target.classList.value;
            EA.push(e.target)
            COLL.push(e.target.querySelector("span:nth-of-type(2) img").src);

            if(COLL.length > 2) return;
            if(e.target.classList.value == "opened") return;

            if(My == ''){
                e.target.classList.remove("closed");
                e.target.classList.add("opened");
                My = e.target.querySelector("span:nth-of-type(2) img").alt;
                console.log("1");
            }else{
                if(My == My1){return};
                My1 = e.target.querySelector("span:nth-of-type(2) img").alt

                e.target.classList.remove("closed");
                e.target.classList.add("opened");
                console.log("2");

                if(COLL[0] == COLL[1]){
                    setTimeout(() => {
                        EA.forEach(ele => {
                            const span = ele.querySelector("span:nth-of-type(2) span");
                            span.style.opacity = '1';
                        });
                        EA = [];
                        COLL = [];
                        My = '';
                        My1 = '';
                        countUp();
                        if(count == 8){
                            
                            EndGame();
                        }
                    }, 1000)
                    console.log("3");;    
                }else if(My != My1){
                    setTimeout(() => {
                        EA.forEach(ele => {
                            ele.classList.remove("opened");
                            ele.classList.add("closed");
                        });
                        EA = [];
                        COLL = [];
                        My = '';
                        My1 = '';
                    }, 3000);
                console.log("4");
                }
            }
        })
    }); 
}

function countUp(){
    count++;
    collected.value = count;
}
function countClear(){
    count = 0;
    collected.value = count;
}

function EndGame(){
    let CHK = []
    let MIS = []

    cards.forEach(ele => {
        const span = ele.querySelector("span:nth-of-type(2) span");
        span.style.opacity = '1';  
        if(ele.classList.value == "opened"){
            CHK.push(ele);
        }else{
            MIS.push(ele);
        }
    })

    AllopenFC();

    setTimeout(() => {
        CHK.forEach(ele => {
            ele.style.boxShadow = "0px 0px 12px royalblue";
        });
        MIS.forEach(ele => {
            ele.style.boxShadow = "0px 0px 12px orangered";
        });
        CHK = []
        MIS = []
        My = '';
        My1 = '';

        OnModal();
        clearInterval(Time);
    }, 2000)
}
//////////////////////////////////////////////////////////////////

function OnModal(){
    modal.style.opacity = "1";
    modal.style.zIndex = "999"; 
    Score.innerText = `${count}점`;
}

function OffModal(){
    Score.value = '';
    name.value = '';
    tel.value = '';
    Score.innerText = `${count}점`;
    modal.style.opacity = "0";
    modal.style.zIndex = "-999"; 
}

name.addEventListener('keyup', (e) => {
    e.target.value = e.target.value.replace(/[^ㄱ-힣a-zA-Z]/gi,"")
})
tel.addEventListener('keyup', (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3').replace(/(\-{1,2})$/g, "");
})
sub.addEventListener('click', (e) => {
    e.preventDefault();
    if(tel.value.replace("-", "").replace("-", "").length == 11 && tel.value != null && name.value != null){
        alert("이벤트에 참여해 주셔서 감사합니다.")
        OffModal();
        Once++;
        Stamping();
        DirtyClear();
        AllCloseFC();
        clearTimeout(Time);
        TimeCount.innerText = '00 : 00';
    }else{
        alert("값이 형식에 맞지 않습니다, 다시 한 번 확인해주십시오.")
    }
})

function Stamping(){
    const date = new Date();
    const Y = date.getFullYear();
    const M = String(date.getMonth() + 1).padStart(2, "0");
    const D = String(date.getDate()).padStart(2, "0");
    const Today = `${Y}-${M}-${D}`;

    const Checks = document.querySelector(".FORM ul");
    const C1 = Checks.querySelector('li:nth-child(1)');
    const C2 = Checks.querySelector('li:nth-child(2)');
    const C3 = Checks.querySelector('li:nth-child(3)');

    const Good = document.createElement('span');
    const Todays = document.createElement('span');
    Todays.innerText = Today;
    Good.innerText = '👍';

    if(Once == 1){
        C1.append(Good);
        C1.appendChild(Todays)
    }else if(Once == 2){
        C2.append(Good);
        C2.appendChild(Todays) 
    }else if(Once == 3){
        C3.append(Good);
        C3.appendChild(Todays)
    }    
}

function DirtyClear(){
    clearInterval(Time);
    cards.forEach(ele => {
        const span = ele.querySelector("span:nth-of-type(2) span");
        ele.style.boxShadow = `0px 0px 0px transparent`;
        span.style.opacity = 0;
    });
    startBtn.innerText = "시작하기"
    Timeout = false;
    Stack = 0;
    I = 0;
    gameStatus = false
    countClear();
    clearTimeout(Time);
}