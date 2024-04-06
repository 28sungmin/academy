/* 
[CSS에서 괄호의 용도]
() : nth-child(n)
{} : 스타일 선언시 사용... 선택자{color: red;}
[] : 속성 선택자시 사용... 선택자[속성명^="속성값"] => div[class*="box"]

[javascript에서 괄호의 용도]
() : 메서드(명령), function 함수명(){}, 반복문이나 조건문에서 형성하는 구조 => for(구성식){} / if(조건문){}
{} : 메모리 스코프 function 함수명(){실행문}, for(구성식){실행문} / if(조건문){실행문}, 
객체 데이터를 구성시, 변수명 = {key1: value1, key2: value2}
[] : 배열 데이터
*/

// f(x) = x + 1 ==> x라는 값이 적용되기 전에는 아무런 결과를 도출할 수 없다.
// x라는 값에 2를 적용한다면, 결과는 3

// [함수의 구성]
// - x + 1 이라는 메모리 공간을 갖고오게 됨
// - x에 담기는 설정을 호출문

// 함수 메모리 공간
function start() {
  document.write("<p>함수 호출 결과~!!</p>");
}
// 함수 호출부
start(); // start라고 명명된 함수문을 호출

//배경색 변경
var $body = document.querySelector("body");
var bgColor = ["#faa", "#ffa", "#afa", "#aaf"];
var i = 0; //0 => 1 => 2 => 3 => 4(x) 0(o)

function change_bg() {
  console.log(`적용전 : ${i}`);
  //i = 0;
  //i = 1;
  //i = 2;
  //i = 3;

  $body.style.backgroundColor = bgColor[i];
  console.log(`적용된 배경색 : ${bgColor[i]}`);
  //bgColor[0] = "#faa";
  //bgColor[1] = "#ffa";
  //bgColor[2] = "#afa";
  //bgColor[3] = "#aaf";
  i++;
  console.log(`적용후 : ${i}`);
  //i = 1;
  //i = 2;
  //i = 3;
  //i = 4; => 찾을 수 없는 인덱스번호
  if (i == bgColor.length) {
    i = 0; //최초의 인덱스 번호 볁경해주세요~
  }
}
/*
//[일반 함수 - 직접 호출]
//#1. 함수문을 작성한다.(대기할 메모리)
function call() {
  console.log(`call의 호출문에 의한 함수문 실행`);
}

//#2. 함수 호출문(함수문의 내부 실행문을 진행시키기 위한 호출)
call(); //1번째 함수 호출문
call(); //2번째 함수 호출문

//[익명 함수 - 간접 호출]
//#1. 함수문을 작성한다.(대기할 메모리)
var call_who = function () {
  console.log(`익명함수 호출`);
};
//#2. 함수 호출문
call_who(); //함수문을 호출
console.log(call_who); //함수문을 표현(실행안됨)
console.log(call_who()); //함수문을 호출(정의되지 않은 데이터)

//캐릭터 구성(객체로 구성 => 속성 + 기능(메서드))
var hero = {
  //속성파트
  name: "화염용병",
  level: 10,
  //기능파트
  action: function () {
    console.log(this); //hero 변수를 가리킨다.
    console.log(`${hero.name}이 모험을 떠납니다.`);
    console.log(`${this.name}이 모험을 떠납니다.`);
  },
};
console.log(hero);
console.log(hero.name);
console.log(hero.action);
console.log(hero.action()); //객체 내의 기능을 호출한 결과

//함수문과 DOM의 결합
//#1. 선택자의 구성(HTML문서상을 기반으로 작성된 실질 공간 선택)
var $func = document.querySelector("#func");
console.log($func);

//#2. 함수문 작성
function img_attr() {
  $func.setAttribute("src", "./img/pet.png");
  $func.setAttribute("alt", "반려동물");
  $func.setAttribute("title", "반려동물 이미지");
}
//#3. 함수 호출
img_attr();

////클릭 이벤트에 의한 이미지 변경[익명함수 적용]
//#1. 선택자
var $img_01 = document.querySelector("#img_01");

//#2. 함수문
var img_change = function () {
  $img_01.setAttribute("src", "./img/girl.png");
};

////버튼 클릭시마다 순차적으로 이미지 변경(pic-1.jpg ~ pic-4.jpg)
var $func_02 = document.querySelector("#btn_img");
var $num = 2; //파일상 직접 호출해야 할 초기 넘버

function change_img() {
  $func_02.setAttribute("src", `./img/pic-${$num}.jpg`);
  $num++; //3 => 4 => 5(x) => 1
  if ($num == 5) {
    $num = 1; //4번 이미지 표출 후, 다음번 호출에 대한 값을 지정한다. 5번 이미지는 존재하지 않기 때문에 1번으로 돌려 놓는다.
  }
}

////이전 버튼과 다음 버튼을 클릭시 해당하는 이미지로 표현(pic-1.jpg ~ pic-4.jpg)
var $ch_img = document.querySelector("#ch_img");
var num = 1;

function prev() {
  num--; //0(x) -> 4 -> 3 -> 2 -> 1
  if (num < 1) {
    //num = 0일때
    num = 4; //강제로 4로 변경하여 그 이전 번호 진행하도록 구성
  }
  $ch_img.setAttribute("src", `./img/pic-${num}.jpg`);
}

function next() {
  num++; //2 -> 3 -> 4 -> 5(x)
  if (num > 4) {
    //num = 5일때
    num = 1; //강제로 1로 값을 변경하여 그 다음 진행하도록 구성
  }
  $ch_img.setAttribute("src", `./img/pic-${num}.jpg`);
  //pic-2.jpg -> pic-3.jpg -> pic-4.jpg
}
*/
// 매개변수를 활용한 데이터의 출력
// 매개변수란 함수구분 외부에서 원인이되는 값을 받는다.
// 함수구문의 내부에 위치한 변수값을 활용하여 최종결과가 출력되도록 구성

// (지역 변수 => 함수 구문 내부에서만 활용가능한 변수)
// 미국 > 캘리포니아주, 텍사스주
// 대한민국 > 서울시, 경기도
var $star1_name = "마동석";
var $star1_job = "영화배우";
var $star2_name = "장도연";
var $star2_job = "개그우먼";

function fnc(name, job) {
  // name이라는 변수명은 함수구문 내부에서만 사용할 수 있음(지역변수)
  console.log(name);
  console.log(job);
  console.log(`저의 이름은 ${name}이며, 저의 직업은 ${job} 입니다.`);
}

console.log(name); // 빈 값
fnc("BTS", "가수");
fnc($star1_name, $star1_job);
fnc($star2_name, $star2_job);

// fnc(star1_name)

// 매개변수를 활용한 회원명단 출력
// #1. 회원명단의 배열 데이터
// 2차 배열 패턴 : ["이름", "아이디", "이메일"]
var $member = [
  ["홍일동", "h1d", "h1d@naver.com"],
  ["홍이동", "h2d", "h2d@gmail.com"],
  ["홍삼동", "h3d", "h3d@daum.net"],
  ["홍사동", "h4d", "h4d@naver.com"],
  ["홍오동", "h5d", "h5d@nate.com"],
  ["홍육동", "h6d", "h6d@kakao.com"],
  ["홍칠동", "h7d", "h7d@gmail.com"],
];

// #2. 선택자를 구성
var $memList = document.querySelector("#mem_result");
console.log($memList);

// #3. 회원 리스트를 모을 빈 케이스를 구성한다.
var $mem_case = "";

// #4. 매개변수를 활용하여 테이블 내의 구조를 구성하는 함수구문 / 함수 호출문을 작성
function memberListMake(name, id, email) {
  $mem_case += `
  <tr>
    <td>${name}</td>
    <td>${id}</td>
    <td>${email}</td>
  </tr>
  `;
}
// 호출문 방식 - 1 : 절대 사용 금지!!
/*
memberListMake($member[0][0], $member[0][1], $member[0][2]);
memberListMake($member[1][0], $member[1][1], $member[1][2]);
memberListMake($member[2][0], $member[2][1], $member[2][2]);
memberListMake($member[3][0], $member[3][1], $member[3][2]);
memberListMake($member[4][0], $member[4][1], $member[4][2]);
memberListMake($member[5][0], $member[5][1], $member[5][2]);
memberListMake($member[6][0], $member[6][1], $member[6][2]);
*/

// 호출문 방식 - 2
for (i = 0; i < $member.length; i++) {
  // i = 0 ~ 6
  memberListMake($member[i][0], $member[i][1], $member[i][2]);
}

// #5. 지정된 선택자 내부에 HTML 문구를 넣어준다.
$memList.innerHTML = $mem_case; // ""으로 대체한거다.

// 매개변수를 활용한 환경사진 화면에 뿌려주기
// #1. 객체 배열 패턴
var environ_arr = [
  { img: "environ_news_1.jpg", title: "환경사진1" },
  { img: "environ_news_2.jpg", title: "환경사진2" },
  { img: "environ_news_3.jpg", title: "환경사진3" },
  { img: "environ_news_4.jpg", title: "환경사진4" },
  { img: "environ_news_5.jpg", title: "환경사진5" },
  { img: "environ_news_6.jpg", title: "환경사진6" },
  { img: "environ_news_7.jpg", title: "환경사진7" },
  { img: "environ_news_8.jpg", title: "환경사진8" },
  { img: "environ_news_9.jpg", title: "환경사진9" },
  { img: "environ_news_10.jpg", title: "환경사진10" },
  { img: "environ_news_11.jpg", title: "환경사진11" },
  { img: "environ_news_12.jpg", title: "환경사진12" },
];

// #2. 선택자 구성
var $photoCover = document.querySelector(".photoCover");

// #3. 스크립트에서 사용할 빈케이스를 구성
var $photoGroup = ``;

// #4. 함수구문과 함수 호출문
function sendPhoto(imgPhoto, titlePhoto) {
  $photoGroup += `
  <div class="photo">
    <div class="photoImg" style="background-image:url(./img/${imgPhoto})"></div>
    <h4>${titlePhoto}</h4>
  </div>
  `;
}
for (v of environ_arr) {
  console.log(v);
  sendPhoto(v.img, v.title);
}

// #5. html에 넣는다.
$photoCover.innerHTML = $photoGroup;

// [ 과제 ] 던전 입장시 멤버들 구성됨 => 카톡으로 코드와 결과값
// (console 창에 출력할 내용) "닉네임(직업 - level)님이 입장하셨습니다."
// 2차 배열 패턴["닉네임", "직업", level] 으로 구성
var dungeon1 = [
  ["불타는 용병", "기사", 56],
  ["얼음 마법사", "마법사", 47],
  ["암흑 도적단장", "도적", 51],
  ["블랙 요정", "다크엘프", 49],
];
function enterance1() {
  console.log();
}
// 반복하여 호출

// [ 과제 ] 객체배열
var dungeon2 = [
  { nickname: "불타는 용병", job: "기사", level: 56 },
  { nickname: "얼음 마법사", job: "마법사", level: 47 },
  { nickname: "암흑 도적단장", job: "도적", level: 51 },
  { nickname: "블랙 요정", job: "다크엘프", level: 49 },
];
function enterance2() {}
// 반복하여 호출

// 전역변수 vs 지역변수 : (상대적 기준)
var globalVar = "전역변수값"; // (대한민국)
function varfunc() {
  // (경기도)
  var localVar = "지역변수값";

  console.log(globalVar);
  console.log(localVar);
}
console.log(globalVar);
// localVar is not defined
// ==> 함수구문 내부에 선언된 변수(매개변수 포함)는 외부에서 사용할 수 없음
// console.log(localVar);
varfunc();
////////////
// 함수 구문 내부에서 선언된 값을 외부로 가져오기 위해서는
var global = "전역값";
function vFunc() {
  var local = "지역값";
  return local;
}
var localVal = vFunc();
console.log(localVal);
// #1. vFunc() 함수 실행
// #2. 함수문으로부터 local의 지역변수값을 돌려받는다.
// #3. localVal라는 변수에 담는다.

// [return문1]
// 함수를 계산하는 과정에서 데이터값으로 매개변수를 보내고 그 값을 지역에서 게산하여 돌려받는 과정
function sum1(num1, num2) {
  var total_sum = num1 + num2;
  console.log(total_sum);
  return total_sum;
}
var final_sum = sum1(200, 300);
console.log(final_sum);

// [return문2]
// 구매에 대한 최종 결과값을 도출 지역변수로 활용했을 때

// 2차 배열 패턴[햄버거 개당 구입 단가, 햄버거 수량, 콜라 개당구입단가, 콜라 수량]

var finalTotal = 0;
var $price_arr = [
  [2000, 4, 1000, 3], // 1일차 구매
  [2000, 2, 1000, 2], // 2일차 구매
  [2000, 3, 1000, 5], // 3일차 구매
];
function eachBuy(hamPrice, hamNum, cokPrice, cokNum) {
  var eachSum = hamPrice * hamNum + cokPrice * cokNum;
  return eachSum;
}
for (i in $price_arr) {
  console.log(i); // 0, 1, 2
  console.log(typeof i); // string
  var eachPrice = eachBuy(
    $price_arr[i][0],
    $price_arr[i][1],
    $price_arr[i][2],
    $price_arr[i][3]
  );
  console.log(eachPrice);
  console.log(`${Number(i) + 1}일차 총 구매한 가격 : ${eachPrice}원`);
  finalTotal += eachPrice; // 11000 + 6000 + 11000
}
console.log(finalTotal);
console.log(`${$price_arr.length}일간 총 구입 금액 : ${finalTotal}원`);

// 만약 장바구니에 담긴 최종 결제금액을 계산해야 한다면

var cartTotalPrice = 0;
var myCart = [
  [25000, 1], // 25000원
  [18000, 5], // 90000원
];
function calc(price, num) {
  var eachSum = price * num;
  return eachSum;
}
for (i = 0; i < myCart.length; i++) {
  var eachListTotal = calc(myCart[i][0], myCart[i][1]);
  console.log(eachListTotal);
  cartTotalPrice += eachListTotal;
}
console.log(`총 결제 금액 : ${cartTotalPrice}`);

// [return 문3]
// return만 작성하게 되면 함수구문의 진행을 중단해라.
function mem_list(name, age, region) {
  console.log(`이름 : ${name}`);
  console.log(`나이 : ${age}`);
  return;
  // return문 하위의 구문은 실행되지 않는다.
  console.log(`지역 : ${region}`);
}
mem_list("이병헌", 50, "서울");
// 데이터가 존재하지 않다면(화면상 표현해야 할 데이터가 없는 상태), 스크립트 구문을 중단시키는 역할
// switch문의 break;와 return;은 비슷한 의미

var testArr;
function start() {
  // 중요!!!!!!!!!!
  // 나중에 console 창은 절대로 남기면 안된다. 심지어 주석처리를 해도 안됨!!!
  // if (!testArr) {
  //   // !testArr의 의미는 testArr라는 변수명에 데이터가 존재하지 않다면
  //   console.log("진행여부 확인1");
  //   return;
  // }
  if (!testArr) return; // 이렇게 한 줄로 써도 됨. 이럴때는 {} 쓸 필요 없음
  // 상단에 return문을 작성했으니까 하위는 진행되지 않는다.
  console.log("진행여부 확인2");
}
start();

// 아래의 switch 문에서 break; 안쓰고 이렇게 써도 된다.
/*
switch(변수명) {
 case "값1": return 실행문 또는 구문
 case "값2": return 실행문 또는 구문
 case "값3": return 실행문 또는 구문
 case "값4": return 실행문 또는 구문
}
*/

// 재귀함수 : 최초로 함수명을 실행한 후, 함수구문 내부에서 다시 호출하는 함수
// (이미지 슬라이드에서 자동모드일 때 좌측으로 이미지가 넘어가는 과정)
var $k = 0; // 최초값
function selfTest() {
  $k++;
  console.log(`재귀함수 : ${$k}`);
  if ($k >= 10) {
    return;
  }
  selfTest();
}
selfTest(); // 최초 호출

// 함수문과 함수 호출문의 위치(전역 함수 / 지역 함수 ==> 상대적인 위치)
// 아래는 되게 안 좋은 방법 중 하나
// 전역 함수문
function firstFunc(msg1) {
  console.log(msg1); // "메시지1"
  // 지역 함수문
  function secondFunc(msg2) {
    console.log(msg2); // "메시지2"
  }
  secondFunc("메시지2"); // 지역함수 호출
  // console.log(msg2); // msg2 is not defined
}
firstFunc("메시지1"); // 전역함수 호출
// callback 함수 : 단계별로 진행이 요구되는 상황에서 사용, 콜백 지옥 (promise~ then ~ then)

// 즉시실행함수(이미지 슬라이드의 시작을 제어)
(function nowFunc() {
  alert("즉시실행함수 실행~!!");
})();

// 즉시 실행함수의 특징
// - 호출명이 없기 때문에 메모리값을 차지할 것이 없음
// - 강제적 실행

// 택배 상자에서 외부의 박스만 갖고는 내용물 확인이 불가
