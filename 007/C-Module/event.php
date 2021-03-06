<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style/event.css">
    <script src="https://kit.fontawesome.com/290aa9bf0d.js" defer crossorigin="anonymous"></script>
    <script src="JS/Event.js" defer></script>
</head>

<body>
    <!-- 이벤트 안내 이미지-->
    <section class="IntroSection Sec1">
        <span>경상남도에서 쏜다!<br>다 주는 이벤트!</span>
    </section>
    <!-- 이벤트 안내 영역-->
    <section class="IntroSection Sec2">
        <span>
            경상남도 특산품을 기억하라!
            같은 카드 찾기 게임에 3일 연속 이벤트에 참여해 주신 분 중 100분을 추첨하여 전 통시장 및 상점에서 사용 가능한 “온누리 상품권 5,000원권”을 보내 드립니다. 경상 남도 특산품도 알아보고 재미있는 게임도 즐길 수 있는 이번 이벤트에 많은 참여 바 랍니다.
            <br><br>
            ○ 이벤트 참여 및 경품 안내
            <ul>
                <li>- 참여방법 : 3일 연속으로 아래의 같은 카드 찾기 게임 참여하기</li>
                <li>- 경품안내 : 온누리 상품권 5,000원권</li>
                <li>- 당첨대상 : 3일 연속 게임 이벤트에 참여한 분 중 100명 추첨</li>
            </ul>
        </span>
    </section>
    <!-- 이벤트 영역 -->
    <section class="ReviewSection Sec3">
        <div class="innerSec3">
            <div class="left">
                <ul class="pan">
                    <li>
                        <span></span>
                        <span>
                            <img src="">
                            <span></span>
                        </span>
                    </li>
                    <li>
                        <span></span>
                        <span>
                            <img src="">
                            <span></span>
                        </span>
                    </li>
                    <li>
                        <span></span>
                        <span>
                            <img src="">
                            <span></span>
                        </span>
                    </li>
                    <li>
                        <span></span>
                        <span>
                            <img src="">
                            <span></span>
                        </span>
                    </li>
                    <li>
                        <span></span>
                        <span>
                            <img src="">
                            <span></span>
                        </span>
                    </li>
                    <li>
                        <span></span>
                        <span>
                            <img src="">
                            <span></span>
                        </span>
                    </li>
                    <li>
                        <span></span>
                        <span>
                            <img src="">
                            <span></span>
                        </span>
                    </li>
                    <li>
                        <span></span>
                        <span>
                            <img src="">
                            <span></span>
                        </span>
                    </li>
                    <li>
                        <span></span>
                        <span>
                            <img src="">
                            <span></span>
                        </span>
                    </li>
                    <li>
                        <span></span>
                        <span>
                            <img src="">
                            <span></span>
                        </span>
                    </li>
                    <li>
                        <span></span>
                        <span>
                            <img src="">
                            <span></span>
                        </span>
                    </li>
                    <li>
                        <span></span>
                        <span>
                            <img src="">
                            <span></span>
                        </span>
                    </li>
                    <li>
                        <span></span>
                        <span>
                            <img src="">
                            <span></span>
                        </span>
                    </li>
                    <li>
                        <span></span>
                        <span>
                            <img src="">
                            <span></span>
                        </span>
                    </li>
                    <li>
                        <span></span>
                        <span>
                            <img src="">
                            <span></span>
                        </span>
                    </li>
                    <li>
                        <span></span>
                        <span>
                            <img src="">
                            <span></span>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="right">
                <div class="top">
                    <img src="img/게임.png" alt="14">
                </div>
                <div class="middle">
                    <div class="timer">
                        <label for="time">남은 시간</label>
                        <input readonly value="00 : 00" type="text" id="time">
                    </div>
                    <div class="collect">
                        <label for="collect">찾은 카드 수</label>
                        <input readonly value="0" type="text" id="collect">
                    </div>
                </div>
                <div class="bottom">
                    <button>시작하기</button>
                    <button>힌트보기</button>
                </div>
                <form class="FORM">
                    <ul>
                        <!-- <span>👍</span>
                        <span>2022-03-24</span> -->
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </form>
            </div>
        </div>
    </section>
    <div class="modal">
        <div class="inner">
            <div>
                <h1 class="TITLE">정보를 입력하고 경품을 받아가세요!</h1>
                <h3 class="TINY">이벤트 참여 정보</h3>
                <div class="score"></div>
            </div>
            <div>
                <form>
                    <input required min="2" maxlength="50" size="11" minlength="2" class="name" type="text" placeholder="이름을 입력해주세요">
                    <input required class="tel" size="13" maxlength="13" type="tel" placeholder="전화번호를 입력해주세요">
                    <button class="sub" type="submit">등록</button>
                </form>
            </div>
        </div>
    </div>
</body>
</html>