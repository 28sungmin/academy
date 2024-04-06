var titTest = document.getElementById("titTestId");
console.log(titTest); // <h3 class="titleTest" id="titTestId">타이틀 테스트</h3>

titTest.style.color = "#f00";
titTest.style.fontSize = "54px"; //font-size라고 쓰면 안됨. 반드시 카멜기법으로!

// DOM을 통해서 선언한 부분은 강제로 요소 내부로 작성된다.
// (CSS보다도 우선순위를 가져간다.)

// 동일한 아이디가 하나의 문서 내부에 존재할 때, 맨 처음 해당하는 아이디로만 접근가능
// => 스크립트에서 작성된 모든 명령은 첫번째 아이디로만 적용할 수 있음

// 선택자
// [직접 선택자(원거리 선택자)]
// 1. 아이디선택자 : document.getElementById("아이디명");
// 2. 클래스선택자 : document.getElementsByClassName("클래스명")[인덱스명];
// 3. 태그선택자 : document.getElementsByTagName("태그명")[인덱스명]; => 잘 안써.
// document.getElementsByTagName("body")[0] => 이런식으로 body태그가 하나밖에 없어도 [0]을 반드시 붙여야 한다.

// 4. 특정명칭을 기반으로 선택. 단 한개만 선택할 수 있음
// document.querySelector(".클래스명 | #아이디명 | 태그명 | css 상에서 선언가능한 모든 선택자의 형식")

// 5. 특정명칭을 기반으로 복수의 요소를 선택할 때 => 아이디명은 복수일 수가 없으므로 쓰지 않는다.
// document.querySelectorAll(".클래스명 | 태그명 | css 상에서 선언 가능한 모든 선택자의 형식")[인덱스번호]

// 아이디 선택자
document.getElementById("id_txt").style.color = "blue";

// 클래스 선택자
var $class_trip = document.getElementsByClassName("trip");
console.log($class_trip);
console.log($class_trip[1]);
$class_trip[1].style.backgroundColor = "#f90";

// 태그 선택자
var $tag_h6 = document.getElementsByTagName("h6");
console.log($tag_h6);
console.log($tag_h6[2]);

var $body = document.getElementsByTagName("body");
console.log($body);
/*
$body[0]을 하는 이유 -> 그냥 $body로 하면 HTMLCollection에 있는 배열 데이터를 
지목한 거라서 특정 영역을 지목한게 아니라서.
*/
$body[0].style.backgroundColor = "#ff9";

// querySelector -> 많이 쓰는 편
// 접근할 때 css처럼 .a .b 처럼 작성하면 됨
var $query_item = document.querySelector(".query_unit .fav_01");
console.log($query_item);
// 엄마는 외게인도 fav_01로 되어있지만, 맨 처음에 적힌 것만 접근해서 설정된다.
$query_item.style.fontWeight = "bold";

// querySelectorAll
var $all_item = document.querySelectorAll(".all_unit p");
console.log($all_item);
console.log($all_item[1]);
// 이렇게 같은 요소에 다른 style을 적용하고 싶으면 또 작성해줘야 하는 불편함이 있다.
$all_item[2].style.color = "green";
$all_item[2].style.fontWeight = "bold";

// 여러가지 요소를 대상으로 스타일을 모두 통일시켜야 한다면
// 첫 번째 방법
for (i = 0; i < $all_item.length; i++) {
  $all_item[i].style.backgroundColor = "#aff";
}
// 두 번째 방법
for (v of $all_item) {
  console.log(v); // 각 요소가 출력되는 것을 확인할 수 있다.
  v.style.border = "1px dashed #f00";
}
// 세 번째 방법
// for (i in $all_item) {
//   console.log(i); // i는 인덱스이다.
//   $all_item[i].style.fontStyle = "italic";
// }

/* 
[HTMLCollection와 NodeList 차이]
- HTMLCollection : 문서상에 작성된 순서에 의해서 나열되는 형태(배열 데이터) 
=> 지목을 정확하게 진행
- NodeList : 요청에 의한 문서상에 접근하는 순서에 의해 나열되는 형태(배열 데이터) 
=> NodeList는 간접선택자에서 다시 볼거다.
=> 문서를 다시 훑는 과정에 따라서 선택자를 뽑는다.

둘의 차이점
==> 문서상의 구성에 따라 차이
*/

// ===============================================
// 문서 객체 조작 : get, set
var $card = document.querySelector("#cardEvent");
console.log($card);

// 이게 this.src와 동일
var $card_src = $card.src;
// 절대 경로에 의한 소스파일을 가져옴
// http://127.0.0.1:5503/04_Javascript_DOM_1/img/card.png
console.log($card_src);

// getAttribute : 속성에 접근하겠다.
var $getCardSrc = $card.getAttribute("src");
// 실제 문서상에 존재하는 소스파일만 가져옴
// ./img/card.png
console.log($getCardSrc);

// 문서의 set
// 변경(change)
var $kids = document.querySelector("#kids");
console.log($kids);
$kids.setAttribute("src", "./img/girl.png");
$kids.setAttribute("alt", "소녀 이미지");

// 생성(create)
$kids.setAttribute("class", "kidsImg");
$kids.setAttribute("author", "이성민"); // author는 저작권자

// 제거(delete)
$kids.setAttribute("alt", "");

// 문서 객체 조작과 이벤트(이벤트를 지칭하는 명칭 + 함수)
var $targetImg = document.querySelector("#targetImg");
function moveRight() {
  $targetImg.setAttribute("class", "active"); // active라는 클래스명을 생성
}

function moveLeft() {
  $targetImg.setAttribute("class", ""); // active라는 클래스명을 제거
}

// 클래스명의 속성만을 조작해야한다면 classList.add, remove, contains(true / false)
var $changeBg = document.querySelector(".change_bgc .bgColor");
console.log($changeBg.classList);

function changeBg() {
  $changeBg.classList.add("red"); // 클래스 속성에 새로운 클래스명을 추가
}

// 이번에는 색상 복원 추가된 버전
var $eleButton = document.querySelector(".elevatorButton .number button");

function onOffBtn() {
  // active라는 클래스명이 존재하냐의 여부를 $stateActive에 저장
  var $stateActive = $eleButton.classList.contains("active");

  // true 이면 active 라는 클래스명이 존재 <-> false면 active라는 클래스명이 존재하지 않음
  console.log($stateActive);
  if ($stateActive) {
    // true라면 : active라는 클래스명이 있는 상태 -> 불이 들어온 상태
    $eleButton.classList.remove("active"); // off 상태로 바꿔라
  } else {
    // false
    $eleButton.classList.add("active"); // on 상태로 바꿔라
  }
}

// DOM에서 중요한 부분은 변경하고 싶은 대상이 무엇인지, 사용자가 동작을 수행시켜야 할 대상은 무엇인지.
// 로그인 버튼과 로그인 팝업창은 동일하지 않음

var $darkBg = document.querySelector(".dark_bg");
var $pop = document.querySelector(".popup");
// 팝업창은 contains 안쓰는게 더 낫다.
function loginOpen() {
  // 절대 .active가 아니다!!!
  $darkBg.classList.add("active");
  $pop.classList.add("active");
}

function loginClose() {
  $darkBg.classList.remove("active");
  $pop.classList.remove("active");
}

// 메뉴 : 햄버거 아이콘 클릭에 의한 메뉴 보여주기
var $resMenu = document.querySelector(".res_menu");

function openMenu() {
  $resMenu.classList.add("active");
}

function closeMenu() {
  $resMenu.classList.remove("active");
}

// 금일 복습
/*
선택자
- [단일 선택자] document.querySelector("선택자")
- [복수 선택자] document.querySelectorAll("선택자")[인덱스번호]

문서조작
- getAttribute("속성명");
- setAttribute("속성명", "새로운 값") : 속성의 생성, 추가, 삭제
- classList.add("추가할 클래스명")
- classList.remove("삭제할 클래스명")
- classList.contains("포함된 클래스명") ==> 있으면 true / 없으면 false
*/

/*
[get $ set]
innerHTML
innerText
TabBox 구성
*/
// 문서 내의 하위요소 가져오기(get) / 조작하기(set)
var $inHTML = document.querySelector(".in_html");
console.log($inHTML);

var $get_HTML = $inHTML.innerHTML; // 지정된 선택자의 하위 요소를 가져온다.
/*
<img src="./img/coffee-blue.jpg" alt="커피 스토리">
<p>커피 사진-1</p>
console.log 하면 이 주석이 나옴
*/
console.log($get_HTML);

var $set_HTML_el = `<img src="./img/coffee-pink.jpg" alt="커피 스토리" />
<p>커피 사진-3</p>`;
$inHTML.innerHTML = $set_HTML_el; // 지정된 선택자의 하위요소를 새로운 요소들로 변경

var $inText = document.querySelector(".in_text");
var $getText = $inText.innerText;
console.log($getText); // "배경1" 나옴

var $set_Text_el = `<img src="./img/pic-2.jpg" alt="" />
<p>배경2</p>`;
// 이미지가 안 뜨고 넣고자 하는 태그가 그냥 출력된다.
// innerText를 쓰면 태그들이 그냥 텍스트화 된다.
$inText.innerText = $set_Text_el;

// innerHTML은 태그 이하의 적용 가능(하위의 문자 적용 포함)
// innerText는 문자 형태의 적용만 가능(태그 영역은 일반적인 텍스트로 노출)

// 적용 유효범위는
// innerHTML > innerText

// 리뷰 더보기
var $addReview = document.querySelector(".review1 .add_review");
var $detailBtn = document.querySelector(".review1 .detail");
function reviewMore() {
  $addReview.classList.add("active");
  $detailBtn.innerHTML = `
    <span class="less" onclick="reviewLess();">-감추기</span>
    `;
}
function reviewLess() {
  $addReview.classList.remove("active");
  $detailBtn.innerHTML = `
  <span class="more" onclick="reviewMore();">+더보기</span>
  `;
}
// innerHTML의 용도 : 변경, 삭제
// 선택자.innerHTML = "기존 하위요소에서 변경된 하위요소"; ==> 변경
// 선택자.innerHTML = ""; ==> 삭제
// 선택자.innerHTML = "선택자의 하위 영역에 새로운 요소 추가"; ==> 생성

// tabBox 영역 구성하기
var tabTop = document.querySelector(".tabSpace .top");
var tabThumbList = document.querySelectorAll(".tabSpace .thumb ul li");
console.log(tabThumbList);

var topImgs = ["tree-1.jpg", "tree-2.jpg", "tree-3.jpg"]; // 배열 데이터

// 이렇게 여기는 3개지만, 몇 개인지도 모르는 li 개수만큼 함수 만드는건 안좋음
function firstTab() {
  for (i = 0; i < tabThumbList.length; i++) {
    // 3개의 리스트에서 active라는 클래스명을 제거한다.
    tabThumbList[i].classList.remove("active");
  }
  // 0번 인덱스 리스트에만 active라는 클래스명 추가한다.
  tabThumbList[0].classList.add("active");
  // 배열 데이터 중에 0번 인덱스의 이미지를 배경의 이미지로 적용한다.
  tabTop.style.backgroundImage = `url(./img/${topImgs[0]})`;
}
function secondTab() {
  for (i = 0; i < tabThumbList.length; i++) {
    tabThumbList[i].classList.remove("active");
  }
  // 1번 인덱스 리스트에만 active라는 클래스명 추가한다.
  tabThumbList[1].classList.add("active");
  // 배열 데이터 중에 1번 인덱스의 이미지를 배경의 이미지로 적용한다.
  tabTop.style.backgroundImage = `url(./img/${topImgs[1]})`;
}
function thirdTab() {
  for (i = 0; i < tabThumbList.length; i++) {
    tabThumbList[i].classList.remove("active");
  }
  // 2번 인덱스 리스트에만 active라는 클래스명 추가한다.
  tabThumbList[2].classList.add("active");
  // 배열 데이터 중에 2번 인덱스의 이미지를 배경의 이미지로 적용한다.
  tabTop.style.backgroundImage = `url(./img/${topImgs[2]})`;
}
