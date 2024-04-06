// 외부스크립트를 활용하여 함수 호출1
var $mouse_img1 = document.querySelector(".ch_img1");
// console.log($mouse_img1);

function call_ch1() {
  $mouse_img1.setAttribute("src", "./img/tree-2-thumb.jpg");
}

function call_ch2() {
  $mouse_img1.setAttribute("src", "./img/tree-1-thumb.jpg");
}

// 외부스크립트를 활용하여 함수 호출2
var $mouse_img2 = document.querySelector(".ch_img2");

//// 선택자.이벤트명 = 함수명
$mouse_img2.onmouseover = mouseover2;

// 아래처럼 작성하면 안됨 => 왜?? 브라우저가 열리자마자 함수가 호출에 의해 즉시 실행된다.
// $mouse_img2.onmouseover = mouseover2();

// function으로 구성한 함수는 문서의 최상단으로 올라간다(호이스팅)
function mouseover2() {
  console.log("함수실행");
  $mouse_img2.setAttribute("src", "./img/tree-2-thumb.jpg");
}

$mouse_img2.onmouseout = mouseout2;
function mouseout2() {
  //   console.log("함수실행");
  $mouse_img2.setAttribute("src", "./img/tree-1-thumb.jpg");
}

// 외부스크립트를 활용하여 함수 호출3
var $mouse_img3 = document.querySelector(".ch_img3");

// 절대 on을 붙이면 안된다!!!
// 의미 : mouseover를 했다면 옆의 function을 실행해라
$mouse_img3.addEventListener("mouseover", function (evt) {
  //   console.log("이벤트 리스너 실행");
  //   지금은 evt가 큰 의미가 없지만, 나중에는 잘 이용해야 함
  //   console.log(evt);
  $mouse_img3.setAttribute("src", "./img/tree-2-thumb.jpg");
});
$mouse_img3.addEventListener("mouseout", function () {
  $mouse_img3.setAttribute("src", "./img/tree-1-thumb.jpg");
});

// 요소대상 이벤트 : click
var $showBtn = document.querySelector(".showBtn");
var $showing = document.querySelector(".showing");

$showBtn.addEventListener("click", function () {
  $showing.innerHTML = `<img src="./img/flower1.jpg" alt="">`;
});

// 게임 캐릭터의 진행
var hero = {
  name: "목탁동동",
  level: 1,
  hp: 100,
};
var your_hp = hero.hp; // 100(hp의 최대값)

var moveBtn = document.querySelector(".move");
var addHpBtn = document.querySelector(".add_hp");
// 아래처럼 p태그의 cur_state야. 라는 식으로 써도 된다.
var curState = document.querySelector("p.cur_state");

// 이동이라는 버튼을 클릭했을 때, 생명력 -5씩 감소
// => hero.hp == 0이 되는 순간 "000님의 생명력이 모두 소진되었습니다."
moveBtn.addEventListener("click", function () {
  // 생명력기 0이 되었습니다.가 안 나오고 바로 생명력이 모두 소진되었습니다.를 출력하기 위해서 <= 5 라고 함
  if (hero.hp <= 5) {
    // p태그 내부의 "현재 변경된 상태"의 텍스트를 바꿔주는 것 => innerHTML과 동일한 역할
    curState.textContent = `${hero.name}님의 생명력이 모두 소진되었습니다.`;
  } else {
    hero.hp -= 5;
    curState.textContent = `${hero.name}님의 생명력이 ${hero.hp}가(이) 되었습니다.`;
  }
  //   console.log(`${hero.name}의 현재 생명력 ${hero.hp}`);
});

// 기존 최대 생명력의 값(100)을 초과하면 안된다.
addHpBtn.addEventListener("click", function () {
  hero.hp += 10;
  console.log(hero.hp);
  //   >=에서 =이 있어야 hero.hp가 100이 되어도 if 문을 만족된다.
  if (hero.hp >= your_hp) {
    // 95    >    105  (X)
    // 105   >    100
    hero.hp = your_hp; // 105로 변경된 값을 최대값인 100으로 대입하여 적용한다.
    curState.textContent = `${hero.name}님의 생명력이 모두 채워졌습니다.`;
  } else {
    curState.textContent = `${hero.name}님의 생명력이 ${hero.hp}가(이) 되었습니다.`;
  }
});

// 요소대상 이벤트 : keyboard 이벤트
// 사용자가 입력을 하는 공간
var input_space = document.querySelector(".input_box");
var searchRst = document.querySelector(".search_rst");
// 검색에어 대한 결과를 보여주는 공간
var searchWord = document.querySelector(".searching_word");

// keydown을 통상적으로 많이 쓴다.
input_space.addEventListener("keydown", function (event) {
  // keyboard 중에서 "enter" 키를 눌렀을 때 검색을 시작하도록 하는 if문
  if (event.keyCode == 13) {
    console.log(event.keyCode);
    // 내가 입력하는 값이 value
    console.log(input_space.value);
    // 입력 상자는 무조건 string이다 (숫자를 넣더라도 string)
    console.log(typeof input_space.value);

    // trim() : 입력된 검색어(문자열) 중에서 전후 공백을 제거한다.
    var input_word = input_space.value.trim();
    console.log(input_word);

    // trim한 결과가 아무것도 없다면 즉,
    // => 검색 입력상자에 띄어쓰기만 존재할 경우
    // 실제 검색어가 존재하지 않을 경우
    if (input_word == "") {
      searchWord.textContent = input_word;
      alert("검색어가 존재하지 않습니다.");
    } else {
      // 실제 검색어가 하나라도 존재한다면
      searchWord.textContent = input_word;
    }
  }
  //   console.log(event);
});

/* 마우스 이동을 통한 이미지 교체 */
// 마우스무브 이벤트가 발생하는 장소
var $move1 = document.querySelector("#move1");
var $cover = document.querySelector(".cover");

$move1.addEventListener("mousemove", function (evt) {
  console.log("마우스 무브 이벤트 발생");
  console.log(evt);
  var $cur_x = evt.pageX;

  // 가장 왼쪽은 0
  console.log(`공간에서 마우스의 x좌표 위치 : ${$cur_x}`);

  $cover.style.width = $cur_x + "px";
});

// 전체 대상 이벤트 : resize 이벤트
// resize는 브라우저가 조정되는 순간 발생하기 때문에
// 처음에는 html 태그에 넣었던 000이 그대로 나오는 것을 확인할 수 있다.
// 그래서 처음 값을 따로 넣어줘야 함. -> 157번째 줄
var $size = document.querySelector(".resize_val_space .size");
var $deviceName = document.querySelector(".deviceName");

// 브라우저가 최초 로딩시 현재의 가로 사이즈를 가져와서 적용한다.
// 아래를 주석처리한 이유 : 175번째 줄에서 resizeEvt()를 호출했기 때문에 자동을
// 164번째 줄이 실행이 되기 때문에.
// $size.textContent = window.innerWidth;

function resizeEvt() {
  // window가 최상위 개체
  var win_width = window.innerWidth;
  console.log(`현재 브라우저의 가로 사이즈 : ${win_width}`);
  $size.textContent = win_width;
  if (win_width >= 1200) {
    $deviceName.textContent = "PC";
  } else if (win_width >= 768) {
    $deviceName.textContent = "Tablet";
  } else {
    $deviceName.textContent = "Mobile";
  }
}

// 브라우저의 사이즈가 조정되면 이벤트가 발생한다.
window.addEventListener("resize", function () {
  console.log("리사이즈 이벤트 발생");
  // resize 이벤트가 발생하면 함수를 호출해라
  resizeEvt();
});

resizeEvt(); // 브라우저가 로딩되면 최초로 함수를 호출해라.

// 전체 대상 이벤트 : scroll 이벤트

window.addEventListener("scroll", function (evt) {
  // console.log("스크롤 이벤트 발생");
  // scroll을 하지도 않았는데도 evt는 처음부터 나와있다.
  console.log(evt);
  var $scrollTop = window.scrollY;
  console.log($scrollTop);
  console.log(`브라우저 상단으로부터 스크롤바의 이동 거리 : ${$scrollTop}`);
});

var leftPart = document.querySelector(".left_part");
var rightPart = document.querySelector(".right_part");
window.addEventListener("scroll", function () {
  var $scrollTop = window.scrollY;
  if ($scrollTop > 1930) {
    leftPart.classList.add("active");
    rightPart.classList.add("active");
  } else {
    leftPart.classList.remove("active");
    rightPart.classList.remove("active");
  }
});
