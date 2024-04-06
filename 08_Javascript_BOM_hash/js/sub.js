// sub.js
// http://127.0.0.1:5503/08_Javascript_BOM_hash/sub.html#nike

// 브라우저가 sub.html로 처음 접근했을 때
// URL로부터 #을 포함한 우측의 문구를 가져오기
var $hash = location.hash;
// #nike | #adidas | #puma 를 출력
console.log($hash);

var $hash_txt = $hash.replace("#", "");
// nike | adidas | puma 를 출력
console.log($hash_txt);

// 선택자 구성하기
// 배너 이미지 교체
var $main = document.querySelector("main");
// 페이지 타이틀 교체
var $title = document.querySelector("#cont .wrap .title h3");
// 내부 이미지 담을 공간
var $contCover = document.querySelector("#cont .wrap .cont");
// .cont라는 공간에 넣을 가상의 빈 문자열 데이터
var $contGroup = "";

var hash_apply = function () {
  $main.style.backgroundImage = `url(./img/${$hash_txt}_banner.jpg)`;
  $title.textContent = $hash_txt;

  // 기존 내용을 지우기 위하여 $contGroup을 초기화한다.
  // 밑에서 +=을 쓰니까 기존의 사진이 남아있는 상태에서 이미지가 추가된다.
  // sub.html 내부에서 상단의 메뉴를 클릭했을 때, 기존의 내용을 초기화시킨다.
  // (기존의 내용은 제거한 상태에서 변경된 내용만 받아들일 준비를 한다.)
  $contGroup = "";
  for (i = 0; i < 4; i++) {
    $contGroup += `<div style="background-image:url(./img/${$hash_txt}_0${
      i + 1
    }.jpg)" onclick="location.href='./detail.html#${$hash_txt}_${i}'"></div>`;
  }
  $contCover.innerHTML = $contGroup;
};
hash_apply();

// sub.html 페이지에서 상단의 메뉴를 클릭했을 때
var $list = document.querySelectorAll("header .wrap nav ul li");
console.log($list); // NodeList(3) [li, li, li]

// const 예약어를 사용하게 되면 요소의 위치를 확실하게 고정시킬 수 있음
// <-> var 예약어는 변경되는 성향을 가진다. var를 하면 어떤 메뉴를 눌러도 puma가 찍힌다.
// let도 괜찮으나 여기서는 되도록 const를 써줘라
for (const v of $list) {
  console.log(v);
  // sub.html 내부에서 메뉴를 클릭했을 때
  v.addEventListener("click", function () {
    console.log(v);
    // 기존 해시로부터 받아온 값을 각 li에 담긴 내용(속성값 rel)으로 변경하겠다는 의미
    $hash_txt = v.getAttribute("rel");
    console.log($hash_txt);
    // 상단의 선언된 함수를 호출
    hash_apply();
  });
}
