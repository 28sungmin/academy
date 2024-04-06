/* //기본문법의 구성
//객체 : Object(객체)
변수명 = 단일 데이터(문자형, 숫자형, 논리형, undefined, null)
변수명 = {key1 : value1, key2 : value2, ...} => 객체
samsungTV = {screenSize : "42인치", color : "white", ...}
변수명 = ["view_01.jpg", "view_02.jpg", ...] => 배열
//내장객체 : 날짜 객체, 수학 객체, 문자 객체, 배열 객체
//문서객체모델(DOM) : HTML 문서 내부에 선택, 조정하면 변화를 시킬 수 있음
//함수 : 원인과 결과로 문서상의 모든 이벤트를 대응할 수 있는 예약을 걸어둠(함수 메모리)
//이벤트 : User가 어떤 행동을 취함에 따라 함수의 결과를 불러오도록 구성
//브라우저객체모델(BOM) : 문서 이외의 공간에 대한 정보를 취득할 수 있음(방문기록, 웹브라우저의 이름/버전/... => 크로스브라우저) */

// 객체(Object)란? 하나 이상의 특징을 갖고 있는 사물
document.write(`<h2>객체</h2>`);

var phone = {
  name: "iPhone17",
  color: "metal gray",
  size: "8inches",
};
console.log(phone);
console.log(phone.name);
console.log(phone.color);

// 게임 캐릭터 구성
var myCharacter = {
  shape: "character.gif",
  name: "피카츄",
  level: 1, // 숫자 데이터로 쓰는 이유는 level이 증가할 수 있기 때문이다.
  skill: "백만볼트",
  hp: 100,
  ep: 0, // 마지막에는 ,를 찍어도 되고 안 찍어도 된다.
};
document.write(`<img src="./img/${myCharacter.shape}"><br />`);
document.write(`나의 캐릭터 이름 : ${myCharacter.name}<br />`);
document.write(`현재 나의 레벨 : ${myCharacter.level}<br />`);

document.write(
  `게임이 시작되었습니다. ${myCharacter.name}가 모험을 떠납니다.<br />`
);

document.write(
  `${myCharacter.name}가 끝판왕에게 ${myCharacter.skill}로 공격을 합니다.<br />`
);
myCharacter.level++;
document.write(`현재 나의 레벨 : ${myCharacter.level}<br />`);
// 실습문제
// 기존 경험치(ep)에서 50을 올려준다.
// 기존 체력(hp)에서 100을 올려준다.
myCharacter.ep += 50;
myCharacter.hp += 100;
document.write(`현재 나의 경험치 : ${myCharacter.ep}<br />`);
document.write(`현재 나의 체력 : ${myCharacter.hp}<br />`);

// 날짜 객체(Date)
// 로컬 컴퓨터(PC, Device)의 시스템으로부터 정보를 받아서 활용하겠다고 선언
// Date() : 날짜 및 시간 정보를 가져오세요~~
var $today = new Date();
console.log($today);

var $cur_year = $today.getFullYear(); // year 정보를 가져오세요
document.write(`${$cur_year}년 `);

var $cur_month = $today.getMonth() + 1;
document.write(`${$cur_month}월 `); // getMonth()는 컴퓨터 상에서 인식하는 첫번째 숫자를 0으로 인식 => 1월의 데이터 값은 0, 2월의 데이터 값은 1, ...

var $cur_date = $today.getDate();
document.write(`${$cur_date}일 `); // getDate() 컴퓨터 상에서 서수개념으로 인지

var $cur_day = $today.getDay();
//document.write(`${$cur_day}요일`); // 일 : 0, 월 : 1, 화 : 2
if ($cur_day == 0) {
  document.write(`(일) `);
} else if ($cur_day == 1) {
  document.write(`(월) `);
} else if ($cur_day == 2) {
  document.write(`(화) `);
} else if ($cur_day == 3) {
  document.write(`(수) `);
} else if ($cur_day == 4) {
  document.write(`(목) `);
} else if ($cur_day == 5) {
  document.write(`(금) `);
} else if ($cur_day == 6) {
  document.write(`(토) `);
}

var $cur_hours = $today.getHours();
// document.write(`${$cur_hours}시`);  // 0 ~ 23
// 오전 => 오전 0시 0분 0초 ~ 오전 11시 59분 59초
// 오후 => 오후 12시 0분 0초 ~ 오후 1시 0분 0초 ~ 오후 11시 59분 59초
if ($cur_hours >= 12) {
  // 오후 시간대
  if ($cur_hours < 13) {
    // 오후 12시 일 때
    document.write(`오후 ${$cur_hours}시 `);
  } else {
    //오후 1시(13) ~ 오후 11시(23)
    document.write(`오후 ${cur_hours - 12}시 `);
  }
} else {
  // 오전 시간대
  document.write(`오전 ${$cur_hours}시 `);
}

var $cur_min = $today.getMinutes();
document.write(`${$cur_min}분 `);

var $cur_sec = $today.getSeconds();
document.write(`${$cur_sec}초 `);

// 1초 = 1000밀리초
var $cur_milliSec = $today.getMilliseconds();
document.write(`${$cur_milliSec}`);

// 인터벌(주기) 설정 => 데이터를 주기적으로 받아온다.

document.write(`<br />`);
var $cur_getTime = $today.getTime(); // 1970년 1월 1일 자정으로부터 지금 정보를 받아옴(밀리세컨드 단위)
document.write(`1970년 1월 1일 자정으로부터 지금 정보 : ${$cur_getTime}<br />`);

// 응용파트 : 자동 로그아웃 기능, 24시간 동안 팝업 열지 않기, D-day 계산기

// 계절별 이미지 바꿔주기
if ($cur_month >= 3 && $cur_month <= 5) {
  document.write(`<img src="./img/img-m.jpg">`);
} else if ($cur_month >= 6 && $cur_month <= 8) {
  document.write(`<img src="./img/img-5.jpg">`);
} else if ($cur_month >= 9 && $cur_month <= 11) {
  document.write(`<img src="./img/img-f.jpg">`);
} else {
  document.write(`<img src="./img/img-w.jpg">`);
}

// 태어난 날짜로부터 경과일 계산하기(b+0000)
var now = new Date();
var birthDay = new Date("2001-08-28");
console.log(birthDay);
var toNow = now.getTime();
console.log(toNow);
var toBirth = birthDay.getTime();
console.log(toBirth);
// 현재 시간으로부터 태어난 날짜의 시각을 빼준다.
var passedTimed = toNow - toBirth;
/* 
1일 = 24시간
1시간 = 60분
1분 = 60초
1초 = 1000밀리세컨드
*/
var passedDate = Math.round(passedTimed / (24 * 60 * 60 * 1000));
console.log(passedDate);
document.write(`<br />내가 살아온 일자 : ${passedDate}일`);
