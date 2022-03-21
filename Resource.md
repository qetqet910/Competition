
# A 모듈

페이지 구성

- Main 3분할, 특산품 안내, 이벤트, 구매 후기
- Main / 각 서비스 바로가기
- 특산품 안내 / 특산품 소개
- 이벤트 / 같은그림찾기 & 출석 이벤트
- 구매 후기 / 고객이 작성하는 구매후기\

- 관리자 페이지, 특산품 관리, 이벤트 관리
- 특산품 관리 / 특산품 정보 관리
- 이벤트 관리 / 이벤트 참여 관리

1920 * 1080
Header, Controls, Footer 영역의 구분도 없이 디자인
타이포그래피 '힘내라 경남!' 슬로건 제작
Copyright (C) Gyeongsangbuk-do. All Rights Reserved.
ALT WEB 표준성 필수 주석, 가독성

제출 방법

```bash
├── 선수 번호
│   ├── A-Module
│   ├── B-Module
│   └── C-Module
```

###### 메뉴 아이콘과 공유하기 아이콘

시용성 고려 디자인과 어울리게 Fixed UX 디자인 적용
메뉴는 3개로 구성 아마 메인 3개 Section과 연동
현재 이용중인 메뉴를 알 수 있어야 함 소셜 아이콘은 3개 이상

###### 메인페이지

가로 1280 이상 메인페이지 3개 영역 분할 서로 잘 어울리도록 디자인
각 영역에는 이미지 바로가기 요소 배치
각 영역은 2개 이상의 이미지 사용 메뉴별 제공 콘텐츠 및 서비스 고려하여 내용 구성
메인페이지가 로딩 될 때 3개 영역의 이미지에는 각각 1개 이상의 동적 효과를 적용한다. (?)
각 영역의 바로가기 요소는 해당 영역의 이미지와 잘 어우러지도록 버튼 또는 아이콘 등으로 구성하며, 사용자의 시선을 끌 수 있는 1개 이상의 동적 효과가 반복적으로 실행되도록 구현한다. (?)

###### 서브 페이지 1 특산품

18개 시군의 특산품 정보를 SVG 위에 동적 효과를 사용해서 구현
"지도" 폴더에 지도, SVG 있음
"특산품" 풀더에 텍스트 파일, 사진 파일을 이용하요 가독성이 높게 구현
SVG를 이용하여 시군(지역)의 영역 표시, 시군의 명칭 표기.
지도 마우스 오버 효과(색깔, 지역명, 특산품 정보) 동적 효과 적용
<!-- -C 연계 특산품 정보는 관리자 페이지에서 변경 가능 / 안내 페이지의 정보 데이터베이스로부터 조회 갸능 -->

###### 서브 페이지 2 이벤트

구성 - 이벤트 안내 이미지 영역, 같은 카드 찾기 게임영역, 출석체크 영역으로 구성한다
이벤트 안내 페이지 - 직접 구상한 문장 OR 디자인, 효과 등을 포함하여 이벤트 안내와 함께 디자인하고 구현한다.
SVG 지도...

``` 이벤트 안내
    경상남도 특산품을 기억하라!
    같은 카드 찾기 게임에 3일 연속 이벤트에 참여해 주신 분 중 100분을 추첨하여 전통시장 및 상점에서 사용 가능한 “온누리 상품권 5,000원권”을 보내 드립니다. 경상남도 특산품도 알아보고 재미있는 게임도 즐길 수 있는 이번 이벤트에 많은 참여 바랍니다. ○ 이벤트 참여 및 경품 안내
    - 참여방법 : 3일 연속으로 아래의 같은 카드 찾기 게임 참여하기
    - 경품안내 : 온누리 상품권 5,000원권
    - 당첨대상 : 3일 연속 게임 이벤트에 참여한 분 중 100명 추첨
```
“상품권” 폴더의 리플렛 파일의 내용과 이미지 활용 가능

같은 카드 찾기 - 게임은 16칸 4 X 4 카드 판에 대표 특산품을 배치하여 보여준 후 전체 카드를 뒤집고 같은 짝 카드를 찾는 게임이다
( 메이플 이벤트 ) 구성 요소( 카드 판, 게임 시작 버튼, 힌트 보기 버튼, 남은 시간, 찾은 카드 수 ) 게임을 시작하면 '시작하기' 버튼이 '다시하기'로 변경
제한 시간은 1:30 분과 초과 보여야 함 시작시 카드는 뒷면 짝을 찾으면 사진 위에 해당하는 시군의 명칭이 보임 관심과 흥미를 유발하는 게임 영역 디자인


출석체크 영역 - 3개의 출석 스탬프 찍을 수 있도록 구성, 게임에 참여하면 1일 1회 출석스탬프 찍을 수 있음, 출석한 날짜가 같이 찍힘
퍼블리싱 결과물은 출석한 날짜와 함께 하나 이상의 스탬프가 찍혀있어야함

###### 서브 페이저 3 이벤트

구매후기 페이지 - 구매후기 안내 이미지 영역, 구매후기 목록영역으로 구성
후기작성 Fixed ICON, 안내 이미지는 아래 안내문 참고 사용자의 참여를 유도할 수 있도록 선수가 직접 구상한 문장이나 디자인, 효과를 포함하여 디자인한다. ­ 

``` 구매후기 안내

    경상남도 특산품의 소중한 구매 후기를 찾습니다. 경상남도 특산품을 사랑하는 고객님의 소중한 경험을 공유함으로써, 지역 특산품을
    홍보하고 판매를 증진시켜, 경상남도 농가의 소득 증대는 물론, 품질이 좋은 특산품을 보다 많은 고객분들과 공유하기 위해 구매 후기를 모집 합니다.
```

구매 후기 목록에는 최소 10개 이상의 글이 보이도록 디자인 하고 구성한다
목록에는 사진, 별점, 이름, 구매품, 구매처, 구매일, 글 내용으로 구성 별점은 10점 만점 별점 값이 5개의 별모양 앙콘에 표현되어 함께 보이게 한다
글 내용은 전체 내용 중 앞쪽 50자만 잘라서 보이게 하고, 나머지 글은 말줄임표로 표기한다.

#### 선수 유의 사항

디자인 제출 

메인 페이지 - main.jpg 
특산품 안내 - sub1.jpg
이벤트 - sub2.jpg
구매후기 - sub3.jpg
슬로건 - slogan.jpg
A - Module 폴더 안에 제출

# B 모듈

사용자 페이지의 데이터는 모두 API를 이용하여 처리해야 한다. 선수는 이를 고려하여
구현하는 From의 값이 API로 처리될 수 있도록 구현한다. 
과제 수행에 필요한 html코드와 css코드를 추가로 직접 작성 하고, 필요시 A-Module에서 작성한 소스코드를 수정 할 수 있다. 
디자인 특성과 일관성을 유지, 화면에 출력되는 모든 숫자 및 가격은 ‘,’ 로 자릿수가 표시 되어야 한다.

###### 이벤트

같은 카드 찾기 게임은 16칸(가로 4칸, 세로 4칸)의 카드판에 카드(시군별 대표 특산품
사진)를 배치하여 보여준 후 전체 카드를 뒤집어 놓고 같은 짝의 카드를 찾는 게임
“특산품” 폴더)의 사진파일과 파일명을 이용하여 18개의 시군별 카드를 생성
페이지가 로딩 되면, 16장의 카드 뒷면이 보여지고, “게임시작” 버튼이 활성화
클릭하면 18개 카드 중 무작위로 선택 된 8장의 카드짝(총16장의 카드 이미지)이 카드의 앞면(사진면)이 보이도록 카드판에 랜덤하게 배치
남은시간 영역에는 5초부터 0초까지 카드 확인시간이 1초 간격으로 카운트다운
카드 확인시간(5초 동안)에는 카드를 선택해도 뒤집히지 않는다
(5초 동안)이 모두 지나면, “게임시작” 버튼은 “다시하기” 버튼으로 변경되고
카드는 뒷면이 보이도록 뒤집어지며 남은 시간이 1분 30초로 나타나며 0초까지 1초씩 감소한다.
카드의 뒤집기 효과는 입체적으로 회전하는 효과를 적용한다. 
카드는 1장씩 2장까지만 뒤집을 수 있고, 뒤집어서 앞면이 보이는 카드는 다시 클릭해도 뒤집히지 않는다. 
3초의 지속시간, 끝나면 첫 번째 카드는 다시 뒤집힘 동일할 시 둘 다 앞면 다를 시 둘 다 뒷면
찾으면 찾은 카드 수가 1 증가, 지역명(시군명칭)이 보임 게임 도중 “다시하기”를 누르면 남은 카드 수 초기화, 카드 랜덤 세팅 
힌트 보기 누르면 모든 카드가 3초간 앞면 그 후 돌아감 제한시간 0초 혹은 카드 8짝 다 찾으면 게임 종료, 종료 되면 카드는 모두 앞면
찾은 카드 못 찾은 카드는 표식으로 구분, 게임이 종료되면, 찾은 카드수와 함께 이름과 핸드폰번호를 입력하여 참여정보를 등록할 수 있는 폼이 나타난다. 

FORM - 이름과 핸드폰번호는 필수 값이다, 이름은 2자 이상 50자 이내의 한글과 영어만 입력이 가능하다. 핸드폰 번호 11자리 MAX 숫자 입력할 떄 마다 000-0000-000 의 폼으로 변경됨, 복붙하여도 적용 정보 입력 후 "등록" 버튼을 누르면 입력 값을 검증, 요구사항에 맞지 않는 경우 오류 메시지 출력
요구사항에 적합한 경우 “이벤트에 참여해 주셔서 감사합니다" 메시지 출력 페이지 이동 없이 게임 초기화, 다시하기 버튼은 게임 시작, 찾은 카드 수 0으로 변경
이벤트에 참여하면 출석체크 영역에 출석스탬프가 찍힌다 
*** 참여정보 등록은 C모듈에서 API를 이용하여 정보가 등록되도록 구현할 것이다. 선수는 이를 고려하여 구현한다 ***
*** 출석스탬프는 C모듈에서 API를 이용하여 출석정보를 서버로부터 받아서 *연속* 출석 일수만큼 찍히도록 구현할 것이다. 선수는 이를 고려하여 구현한다. ***
<!-- 이벤트 참여 정보 - (API) - Server - (API) - 출석스탬프 도장 -->

###### 구매후기

­구매후기 페이지에서 “후기작성” 버튼(또는 아이콘)을 클릭하면, 구매 후기를 등록 할 수 있는 후기등록 모달창이 보인다 ­ 
후기등록 모달창에는 이름, 구매품, 구매처, 구매일, 내용, 별점, 사진을 등록할 수 있는 폼이 있다
이름, 구매품, 구매처, 구매일, 내용, 별점, 사진(1개 이상)은 필수 값이다 
이름은 2자 이상 50자 이내의 한글과 영어만 입력이 가능하다
구매일은 달력에서 날짜를 선택하여 “yyyy-mm-dd” 형태로 입력할 수 있다
내용은 Textarea 에 작성하며, 100자 이상 작성해야 한다
별점은 5개의 별모양 아이콘에 마우스를 이용하여 0점부터 10점의 점수를 줄 수 있다. (예 : 배민 별점 세 번째 아이콘 중앙을 기점으로 우측에 마우스를 올렸을 경우 3개의 별아이콘 색상이 변경되며, 점수는 6점이 된다)
사진은 최소 1개 이상 등록해야 하고, *jpg* 파일만 등록할 수 있다.  *사진추가* 버튼을 누르면, 사진 파일을 등록할 수 있는 입력란이 추가된다 
후기등록 모달창에서 “후기등록” 버튼을 누르면, 위의 요구사항을 검증하고, 입력 값이
올바른 경우 “구매 후기가 등록되었습니다.” 메시지를 출력하고 모달창이 닫히며,
입력 값이 요구사항에 맞지 않는 경우 적절한 오류 메시지를 출력한다. ­
후기등록 모달창에서 “닫기” 버튼을 누르면 입력 값과 폼은 초기화 되고 창이 닫힌다. ­
구매 후기 등록은 C모듈에서 API를 이용하여 정보가 등록 되도록 구현할 것이다. 선수는 이를 고려하여 구현한다.

<!-- 구매 후기 - (API) - Server -->

# C 모듈

사용자페이지(특산품안내, 이벤트, 구매후기 메뉴)의 Server-Side를 구현하여 서비스 기능을 완성하고, 관리자 페이지를 구현하여 홈페이지를 완성,
데이터베이스를 설계하고, 사용자 페이지의 정보가 데이터베이스로부터 조회되어 출력되도록 구현,
이벤트와 구매후기의 데이터 처리는 REST API로 구현, JSON 형태로 데이터를 송수신하여 등록, 조회, 수정, 삭제 되도록 구현
각 페이지의 링크가 모두 올바로 동작해야 한다.
필요시 A-Module, B-Module에서 작성한 소스코드를 수정 할 수 있다. MySQL, PHP 등을 활용하여 홈페이지를 완성한다.
API는 Postman 프로그램을 이용하여 테스트하고 평가할 수 있다

###### 특산품 안내

­선수제공파일(“특산품” 폴더)의 텍스트 파일과 사진 파일들을 이용하여 특산품 안내 데이터베이스와 서버의 파일(사진파일)을 구성한다. ­ 특산품 안내 페이지의 사진 및 특산품 정보가 데이터베이스로부터 조회되어 보이도록 구현한다. 

###### 이벤트

참여정보 입력 후 “등록” 버튼을 누르면, “참여정보 등록” API를 이용하여 데이터를 처리하고 응답에 따라 메시지를 출력한다. ­ 이벤트 참여는 1일 1회만 가능하며, 핸드폰번호를 이용하여 중복을 검증한다.

#### 이벤트 참여 정보 등록 API

Request : 참여정보 등록

```JSON
URL: /api/event/applicants
Method: POST
Header:
Body: {
    "name": 이름,
    "phone": 핸드폰번호,
    "score": 찾은 카드 수
}
```

Response 1 : 정상 등록 된 경우

```JSON
Header: Response code: 200
Body: {
    "message": "이벤트에 참여해 주셔서 감사합니다."
}
```
Response 2 : 1일 1회 제한을 초과 한 경우

```JSON
Header: Response code: 401
Body: {
    "message": "하루에 한번만 참여할 수 있습니다."
}
```
Response 3 : 이외의 경우

```JSON
Header: Response code: 401
Body: {
    "message": "오류가 발생했습니다. 다시 시도해 주세요."
}
```

­참여 정보가 등록되면, 핸드폰번호를 이용하여 출석체크 영역에 연속으로 출석한 일수에 맞도록 출석스탬프가 찍힌다, 핸드폰번호로 “연속된 출석일 정보 조회” API를 이용하여 연속 출석한 날짜를 조회한다. 정상적으로 조회된 경우 연속된 참여일 수만큼 "stamps" 에 날짜값(포멧:yyyy-mm-dd) 을 배열에 응답한다.

#### 이벤트 연속 출석 체크 API

Request : 연속된 출석일 정보 조회

```JSON
URL: /api/event/{핸드폰번호}/stamps
Method: GET
Header:
Body:
```
Response 1 : 정상적으로 조회된 경우
```JSON
Header: Response code: 200
Body: {
    "stamps": [출석일1, 출석일2, 출석일3]
}
```
Response 2 : 조회 결과가 없는 경우
```JSON
Header: Response code: 404
Body: {
    "message": "출석정보가 없습니다."
}
```
Response 3 : 이외의 경우
```JSON
Header: Response code: 401
Body: {
    "message": "오류가 발생했습니다. 다시 시도해 주세요."
}
```

출석스탬프는 연속으로 출석한 횟수만큼 찍히며, 연속 출석하지 않는 경우 (어제 이벤트에 참여하지 않은 경우) 초기화되어 마지막 참여일 1개의 스탬프만 찍힌다. ­ 3일 연속 출석한 경우 출석체크 영역에는 3개의 출석스탬프와 함께 “축하합니다. 3일연속 출석하여 경품선정 대상자가 되었습니다.” 라는 문구가 보인다.

###### 구매 후기

#### 구매 후기 등록 API

구매후기 서비스를 위한 API를 구현하여 서비스를 완성, 후기등록 모달창에서 구매후기 입력 후 “등록” 버튼을 누르면, “구매후기 등록”API를 호출하여 데이터 처리.
“구매후기 등록” API에서 등록을 실패 하면 응답에 따라 메시지를 출력하고, 후기등록 모달창은 *입력 값을 유지한 상태로 그대로 있는다*
*사진 파일*의 등록(업로드 및 정보 등록) 처리는 “구매후기 등록” *API에 추가하여 구현*하거나, *별도의 API*를 이용하여 선수가 자유롭게 구현한다.
사진 파일 업로드 시 가로 *또는* 세로 크기가 *500px* 이 넘지 않도록 *썸네일 처리*하여 서버에 업로드 한다
사진 파일 업로드 시 사진 *중앙에 “경상남도 특산품” 글씨를 반투명한 워터마크*로 적용하여 서버에 업로드 한다.

<br>

Request : 구매후기 등록
```JSON
URL: /api/reviews
Method: POST
Header:
Body: {
    "name": 이름, 
    "product": 구매품,
    "shop": 구매처,
    "purchase-date": 구매일,
    "contents": (후기)내용,
    "score": 별점
}
```
Response 1 : 정상 등록 된 경우
```JSON
Header: Response code: 200
Body: {
    "message": "구매 후기가 등록되었습니다."
}
```
Response 2 : 필수 값이 누락된 경우
```JSON
Header: Response code: 401
Body: {
    "message": "필수 입력값이 누락 되었습니다."
}
```
Response 3 : 이외의 경우
```JSON
Header: Response code: 401
Body: {
    "message": "오류가 발생했습니다. 다시 시도해 주세요."
}
```

구매후기가 새로 등록되면, 후기등록 *모달창이 닫히며, 페이지의 이동 없이, 목록에 새로 작성한 구매후기가 추가*된다

#### 구매 후기 목록 조회 API

“구매후기 목록 조회” API를 이용하여 구매 후기 목록을 조회한다. ­구매후기 목록은 *최근 작성된 후기가 위에* 오도록 작성일 역순으로 정렬한다
“구매후기 목록 조회” API의 “last-key” 파라미터는 목록에 보이는 마지막 후기 글의 키값 (예:글번호) 이다
목록에 전체 후기 글이 모두 보일 때까지 10개 글 단위로 스크롤 페이징 된다
(사용자가 스크롤을 내려 목록의 마지막 글이 보이면 아래로 마지막 글 다음의 10개 글이 추가된다.)
<!-- 그니까 지금 무한 스크롤로 만들라고 하는 거야? 이런씨 -->

<br>

Request : 구매후기 목록 조회
```JSON
URL: /api/reviews?last-key=n
Method: GET
Header:
Body:
```
Response 1 : 정상적으로 조회된 경우
```JSON
Header: Response code: 200
Body: {
    "reviews": [
        {
        "key": 글번호,
        "name": 이름,
        "product": 구매품,
        "shop": 구매처,
        "purchase-date": 구매일,
        "contents": 내용(50자),
        "score": 별점
        "photo" : 첫 번째 사진 파일 URI
        }, ...
    ]
}
```
Response 2 : 이외의 경우
```JSON
Header: Response code: 401
Body: {
"message": "오류가 발생했습니다. 다시 시도해 주세요."
}
```

<br>

­구매후기 목록에서 후기를 선택하면 *모달창으로 구매후기 상세정보*가 보인다

“구매후기 상세 조회” API를 이용하여 구매 후기 상세정보를 조회한다
상세정보에는 *이름*, *구매품*, *구매처*, *구매일*, *내용(전체)*, *별점*, *사진(전체)*이 보인다
사진은 *하나의 사진이 크게* 보이며, 나머지 사진은 *작은 크기의 사진목록*으로 보인다
작은 크기의 사진 목록에서 사진을 선택하면, 큰 사진 영역의 사진이 작은 크기의 사진목록에서 선택한 사진으로 변경 된다
<!-- 갤러리까지.. 화룡점정이네 씨~발거진짜 -->
구매후기 등록 일을 기준으로 이전 글과 다음글로 이동 할 수 있는 버튼이 있고, 버튼을 누르면 이전글 또는 다음글로 상세정보가 변경된다.

<br>

Request : 구매후기 상세 조회
```JSON
URL: /api/reviews/{구매후기key(또는 글번호)}
Method: GET
Header:
Body:
```
Response 1 : 정상적으로 조회된 경우
```JSON
    Header: Response code: 200
Body: {
    "name": 이름,
    "product": 구매품,
    "shop": 구매처,
    "purchase-date": 구매일,
    "contents": 내용(전체),
    "score": 별점
    "photos" : [
        {"file": 사진 파일 URI},
        {"file": 사진 파일 URI},
        ...
    ]
}
```
Response 2 : 이외의 경우
```JSON
Header: Response code: 404
Body: {
    "message": "구매 후기를 찾을 수 없습니다."
}
```

###### 관리자 로그인 권한 및 확인

http://localhost(또는 127.0.0.1)/admin URL로 접속하면, 관리자 로그인 폼이 나타난다. 
관리자 계정(ID : admin, Password : 1234), 관리자 권한 부여
관리자 페이지 메뉴(특산품 관리, 이벤트 관리)에 권한 없이 접속 시 "관리자 권한이 필요합니다" 출력 후 메인페이지로 리다이렉션


###### 특산품 관리

특산품 관리에는 18개 시군의 특산품 정보(*시군명*, *대표특산품 사진*, *특산품*)와 *관리* 버튼이 목록에 보인다.
관리 버튼을 클릭하면 사진과 특산품을 변경할 수 있는 폼이 보이고, 사진과 특산품을 변경할 수 있다.
*특산품 정보 변경 기능*은 *직관적*이고, 관리자가 사용하기 쉽도록 구성하고 구현 한다.
변경한 사진과 특산품 정보가 특산품 관리 페이지 및 특산품 안내 페이지에 *즉시 반영*되어 보인다. 

###### 이벤트 관리

이벤트 관리 메뉴는 이벤트 *참여 정보*를 확인하고, *일별로 참여 정보를 조회*할 수 있는 기능을 제공한다. ­ 
이벤트 참여 목록은 *이름*, *휴대폰번호*, *점수(찾은 카드 수)*, *참여일*, *연속출석일수* 항목으로 구성한다.
목록 위에는 달력에서 *날짜를 선택하여 조회*할 수 있는 *날짜 입력란*과 *조회* 버튼이 있다.
날짜를 입력하고 조회버튼을 누르면, 해당 날짜의 이벤트 참여 목록이 보인다.
연속출석일수는 날짜 조회조건과는 무관하며, 각 참여자가 마지막으로 연속하여 참여한 날짜의 수이다. 
­연속출석일수가 *3일인 참여 건은 하이라이트 처리*하여 돋보이게 하여 당첨 대상자를 쉽게 구분할 수 있게 한다.

###### 제출

C-Module 폴더 안에 xampp 폴더 전체를 복사하여 제출