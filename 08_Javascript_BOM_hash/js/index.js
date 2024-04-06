// index.js
/*
[ 랜덤 방식으로 로또번호 6개를 추출해야 한다면 ]

var lottoArr = [];
var lottoNum;
// lottoArr의 배열 데이터의 개수가 6보다 작으면 계속 반복시킨다. 6개가 되면 반복문 탈출.
while (lottoArr.length < 6) {
  // +1 대신해서 +1 안쓰고 floor 대신에 ceil써도 된다.
  lottoNum = Math.floor(Math.random() * 46) + 1; //  1 ~ 46
  if (lottoArr.indexOf(lottoNum) == -1) {
    // 기존  lottoArr 배열 데이터에 동일한 값이 존재하지 않다면 맨 뒤에 넣어주세요.
    lottoArr.push(lottoNum);
  }
}
console.log(`자동모드로 생성된 로또번호 6개 : ${lottoArr}`);
// 로또 번호를 오름차순으로 정렬하기 위함
lottoArr.sort(function (a, b) {
    // b - a 로 하면 내림차순으로 된다.
  return a - b;
});
console.log(
  `자동모드로 생성된 로또번호 6개 (작은 수부터 정렬된 상태): ${lottoArr}`
);
// "데이터로 받을 때, 날짜 데이터 20240122 < 20240331"를 이용해서 정렬을 이용할 수도 있다.
*/

/*
[ 웹 접근성 ] : 시각장애인, 색약장애인, 청각장애인, 신체장애인 등 모든 기본적인 활동이 제한된 사용자에 대해서 웹 또는 앱에도 동일하게 정보를 받을 수 있도록 소스를 설계하는 일련의 과정

// 마우스 접근이 아니더라도 접근이 가능하도록 하기 위해 아래와 같이 작성을 해야 함.
<a href="URL 주소" onclick="this.href='URL 주소'" onkeydown="this.href='URL 주소'">링크로 이동</a>
*/

// nike 구성
// 선택자를 구성
var $nike_contCover = document.querySelector("#cont_01 .wrap .cont");
// innerHTML에 접근하겠다는 것임
var $nike_contGroup = "";

// 랜덤 방식으로 0, 1, 2, 3 중에서 2개를 가져온다.
// (조건, 동일한 숫자가 존재하지 않음)
var nike_num_arr = [];
var nike_number;
while (nike_num_arr.length < 2) {
  // 가지고 올 수 있는 값 : 0 ~ 3
  // 최솟값 0.0001 =(*4)=> 0.0004 =(Math.floor:내림)=> 0
  // 최댓값 0.9999 =(*4)=> 3.9996 =(Math.floor:내림)=> 3
  nike_number = Math.floor(Math.random() * 4);
  console.log(nike_number);

  //   겹치는 값이 나오지 않게 하기 위해서 if 문을 사용한다.
  // indexOf == -1 : "nike_number의 값이 nike_num_arr에 없다"는 의미
  if (nike_num_arr.indexOf(nike_number) == -1) {
    // 배열 데이터에 동일한 값이 존재하지 않다면 맨 뒤에 넣어주세요~
    nike_num_arr.push(nike_number);
  }

  console.log(nike_num_arr);
}

// 해당 배열 데이터로부터 이미지를 화면상에 구현한다.
for (i = 0; i < nike_num_arr.length; i++) {
  $nike_contGroup += `<div style="background-image:url(./img/nike_0${
    nike_num_arr[i] + 1
  }.jpg)" onclick="location.href='./detail.html#nike_${
    nike_num_arr[i]
  }' "></div>`;
}
$nike_contCover.innerHTML = $nike_contGroup;

// adidas 구성
// 선택자를 구성
var $adidas_contCover = document.querySelector("#cont_02 .wrap .cont");
// innerHTML에 접근하겠다는 것임
var $adidas_contGroup = "";

// 랜덤 방식으로 0, 1, 2, 3 중에서 2개를 가져온다.
// (조건, 동일한 숫자가 존재하지 않음)
var adidas_num_arr = [];
var adidas_number;
while (adidas_num_arr.length < 2) {
  // 가지고 올 수 있는 값 : 0 ~ 3
  // 최솟값 0.0001 =(*4)=> 0.0004 =(Math.floor:내림)=> 0
  // 최댓값 0.9999 =(*4)=> 3.9996 =(Math.floor:내림)=> 3
  adidas_number = Math.floor(Math.random() * 4);
  console.log(adidas_number);

  //   겹치는 값이 나오지 않게 하기 위해서 if 문을 사용한다.
  // indexOf == -1 : "adidas_number의 값이 adidas_num_arr에 없다"는 의미
  if (adidas_num_arr.indexOf(adidas_number) == -1) {
    // 배열 데이터에 동일한 값이 존재하지 않다면 맨 뒤에 넣어주세요~
    adidas_num_arr.push(adidas_number);
  }

  console.log(adidas_num_arr);
}

// 해당 배열 데이터로부터 이미지를 화면상에 구현한다.
for (i = 0; i < adidas_num_arr.length; i++) {
  $adidas_contGroup += `<div style="background-image:url(./img/adidas_0${
    adidas_num_arr[i] + 1
  }.jpg)" onclick="location.href='./detail.html#adidas_${
    adidas_num_arr[i]
  }' "></div>`;
}
$adidas_contCover.innerHTML = $adidas_contGroup;

// puma 구성
// 선택자를 구성
var $puma_contCover = document.querySelector("#cont_03 .wrap .cont");
// innerHTML에 접근하겠다는 것임
var $puma_contGroup = "";

// 랜덤 방식으로 0, 1, 2, 3 중에서 2개를 가져온다.
// (조건, 동일한 숫자가 존재하지 않음)
var puma_num_arr = [];
var puma_number;
while (puma_num_arr.length < 2) {
  // 가지고 올 수 있는 값 : 0 ~ 3
  // 최솟값 0.0001 =(*4)=> 0.0004 =(Math.floor:내림)=> 0
  // 최댓값 0.9999 =(*4)=> 3.9996 =(Math.floor:내림)=> 3
  puma_number = Math.floor(Math.random() * 4);
  console.log(puma_number);

  //   겹치는 값이 나오지 않게 하기 위해서 if 문을 사용한다.
  // indexOf == -1 : "puma_number의 값이 puma_num_arr에 없다"는 의미
  if (puma_num_arr.indexOf(puma_number) == -1) {
    // 배열 데이터에 동일한 값이 존재하지 않다면 맨 뒤에 넣어주세요~
    puma_num_arr.push(puma_number);
  }

  console.log(puma_num_arr);
}

// 해당 배열 데이터로부터 이미지를 화면상에 구현한다.
for (i = 0; i < puma_num_arr.length; i++) {
  $puma_contGroup += `<div style="background-image:url(./img/puma_0${
    puma_num_arr[i] + 1
  }.jpg)" onclick="location.href='./detail.html#puma_${
    puma_num_arr[i]
  }' "></div>`;
}
$puma_contCover.innerHTML = $puma_contGroup;
