document.write("<h2>배열 객체</h2>");
document.write(
  "<p>필요한 만큼의 데이터 값(들)을 하나의 변수명에 저장할 수 있음</p>"
);

// 배열 데이터와 객체 데이터 공통점 : 추가 생성이 가능하기 때문에  무한으로 데이터를 담을 수 있음
// 배열 데이터와 객체 데이터 차이점
// - 객체 데이터 : key(분리공간의 항목이름)와 value(각 항목마다 담긴 데이터 또는 함수), 변수명.name을 호출하면 name에 담긴 데이터를 순서에 상관없이 가져올 수 있음
var hero = {
  name: "홍길동",
  word: "아버지를 아버지라 ...",
  action: function () {
    return "구름타고 슝~~";
  },
};
console.log(hero); // 객체 데이터는 순서가 없는 데이터이다.
console.log(hero.name);
console.log(hero.action());

// - 배열 데이터 : 각 데이터마다 지정된 순서가 존재, 각 순서마다 인덱스번호가 붙는다. 0 -> 1 -> 2 -> 3 -> ... ==> 증감연산자(i++)로 데이터 추출이 가능

// 배열의 패턴을 구성 : [이미지, 타이틀, 가격정보, 판매자 이름]
var $kakao_arr = ["kakao.jpg", "카카오 스티커", 1500, "라이언"];
console.log($kakao_arr); // ['kakao.jpg', '카카오 스티커', 1500, '라이언']
console.log($kakao_arr[0]); // "kakao.jpg"
console.log($kakao_arr[1]); // "카카오 스티커"
console.log($kakao_arr[2]); // 1500
console.log($kakao_arr[3]); // "라이언"
console.log($kakao_arr[4]); // undefined ==> 데이터 없음

// 데이터를 추출하는 과정에서 맨 좌측에 있는 데이터의 인덱스 번호는 0
// var $kakao_arr = [0번 인덱스 번호의 데이터, 1번 인덱스 번호의 데이터, ...]
var i = 0;
console.log($kakao_arr[i]); // "kakao.jpg"
i++; // i = 1
console.log($kakao_arr[i]); // "카카오 스티커"
i++; // i = 2
console.log($kakao_arr[i]); // 1500
i++; // i = 3
console.log($kakao_arr[i]); // "라이언"

// i라는 변수를 기준으로 해당하는 데이터를 찾아가는 과정상에서 증감연산자를 사용하는 것이 가능

// 배열 데이터를 활용하여 요일정보 표현하기(일요일:0 ~ 토요일:6)
document.write(
  `<h4>배열 데이터를 활용하여 요일정보 표현하기(일요일:0 ~ 토요일:6)</h4>`
);
var $current = new Date();
var $day = $current.getDay();
console.log($day);
var yoil_arr = ["일", "월", "화", "수", "목", "금", "토"];
document.write(`<p>오늘은 ${yoil_arr[$day]}요일입니다.</p>`);

// 요일을 이미지로 표현해야 한다면
var img_arr = ["sun", "mon", "tues", "wednes", "thurs", "fri", "satur"];
document.write(`<img src="./img/${img_arr[$day]}day.gif"><br />`);

// 배열 데이터의 개수를 찾는 과정 : 배열 데이터 변수명.length
console.log(img_arr.length);

// push("새로운 데이터") : 배열 데이터의 맨 뒷자리에 추가
// pop() : 맨 마지막 인덱스를 삭제
// shift() : 맨 처음 인덱스를 삭제
// unshift("새로운 데이터") :  배열 데이터의 첫 번째에 추가
//런닝맨 멤버
var member = [
  "유재석",
  "김종국",
  "하하",
  "송지효",
  "양세찬",
  "지석진",
  "전소민",
];
// 특히 push는 많이 쓰니까 반드시 기억하기!!
member.push("개리");
document.write(`런닝맨 멤버 : ${member} <br />`);
console.log(member);

member.pop();
document.write(`런닝맨 멤버 : ${member} <br />`);
console.log(member);

member.shift();
document.write(`런닝맨 멤버 : ${member} <br />`);
console.log(member);

member.unshift("유재석");
document.write(`런닝맨 멤버 : ${member} <br />`);
console.log(member);
// member의 원본 데이터는 변경된다.

// 배열 데이터끼리 합치는 concat() 메서드
document.write(`<h4>배열 데이터끼리 합치는 concat() 메서드</h4>`);
var chars = ["사과", "포도", "바나나"];
var nums = [1, 2, 3];
var numsChars = nums.concat(chars);
document.write(`nums가 chars를 합친 값 : ${numsChars} <br />`);
console.log(numsChars);

var charsNums = chars.concat(nums);
document.write(`chars가 nums를 합친 값 : ${charsNums} <br />`);
console.log(charsNums);

console.log(chars);
console.log(nums);

// 배열 내부의 데이터를 합치는 join() 메서드 : 하나의 문자형 데이터로 구성
document.write(`<h4>배열 내부의 데이터를 합치는 join() 메서드</h4>`);
var $heros = ["앤트맨", "스파이더맨", "캣우먼"];

var string1 = $heros.join();
document.write(`join 메서드의 구분자가 없는 결과 : ${string1}`); // 알아서 ,를 찍어준다.
console.log(string1); // "앤트맨,스파이더맨,캣우먼"
console.log(typeof string1); // string

var string2 = $heros.join("/");
document.write(`join 메서드의 구분자가 있는 결과 : ${string2}`);
console.log(string2); // "앤트맨/스파이더맨/캣우먼"
console.log(typeof string2); // string

document.write("<br /><br />");

// [잠깐 실습]
// 앤트맨~스파이더맨~캣우먼~슈렉~겨울왕국~장화신은 고양이
// concat() 활용하여 배열을 합치고, join()이라는 메서드를 활용하여 문자형 데이터로 합치되 구분자를 "~"로 구분하여야 한다.
// (방법1)
var $movie = ["슈렉", "겨울왕국", "장화신은 고양이"];
var $herosMovie = $heros.concat($movie);
console.log($herosMovie);
var $string_rst1 = $herosMovie.join("~");
console.log($string_rst1);

// (방법2)
var $string_rst2 = $heros.concat($movie).join("~"); // 체이닝 기법(& 개념)
console.log($string_rst2);

// 앤트맨~스파이더맨~캣우먼~슈렉~겨울왕국~장화신은 고양이 => ['앤트맨', '스파이더맨', '캣우먼', '슈렉', '겨울왕국', '장화신은 고양이']
console.log($string_rst2.split("~"));

// [실제 웹사이트에서 split을 어디서 활용하고 있을까?]
// https://comic.naver.com/webtoon/list?titleId=746833
var webToonUrl = "https://comic.naver.com/webtoon/list?titleId=746833";
var webToonCode = webToonUrl.split("=");
console.log(webToonCode);
console.log(webToonCode[1]);
// 최종 요청 넘버는 webToonCode[1]

// 배열 데이터 내에서 원하는 위치에 요소(데이터)를 추가 / 삭제하는 splice() 메서드
document.write(
  `<h3>배열 데이터 내에서 원하는 위치에 요소(데이터)를 추가 / 삭제하는 splice() 메서드</h3>`
);
document.write(
  `<h4>[인수가 한 개인 경우] 배열변수명.splice(인덱스번호) : 배열데이터의 지정한 인덱스 번호로부터 마지막 인덱스 번호까지 잘라서 반환</h4>`
);
var $numbers = [1, 2, 3, 4, 5];
var $oneSplice = $numbers.splice(2);
console.log($oneSplice); // [3, 4, 5]
console.log($numbers); // splice는 원본의 데이터를 바꾼다. // [1, 2]

document.write(
  `<h4>[인수가 두 개인 경우] 배열변수명.splice(인덱스번호, 개수) : 배열데이터의 지정한 인덱스 번호로부터 개수까지 잘라서 반환</h4>`
);
var $study = ["HTML5", "CSS3", "Javascript", "SQL"];
var $twoSplice = $study.splice(1, 2);
console.log($twoSplice); // ['CSS3', 'Javascript']
console.log($study); // ['HTML5', 'SQL']

document.write(
  `<h4>[인수가 세 개인 경우] 배열변수명.splice(인덱스번호, 개수, 추가할 데이터) : 배열데이터의 지정한 인덱스 번호로부터 개수까지 자르고\
    잘려진 위치에 추가할 데이터를 넣는다.</h4>`
);
var $device = ["iPhone15", "갤럭시24", "Macbook", "Gram"];
var $threeSplice = $device.splice(1, 2, "iPad");
console.log($threeSplice); // ['갤럭시24', 'Macbook']
console.log($device); // ['iPhone15', 'iPad', 'Gram'] => 추가할 데이터는 원본 데이터에 넣어진다.

document.write(
  `<h4>[인수가 세 개 이상인 경우] 배열변수명.splice(인덱스번호, 개수, 추가할 데이터1, 추가할 데이터2) : \
    배열데이터의 지정한 인덱스 번호로부터 개수까지 자르고 잘려진 위치에 추가할 데이터를 넣는다.</h4>`
);
var $color = ["레드", "옐로우", "그린", "민트", "블루"];
var $upThreeSplice = $color.splice(2, 2, "옐로우그린", "스카이");
console.log($upThreeSplice); // ['그린', '민트']
console.log($color); // ['레드', '옐로우', '옐로우그린', '스카이', '블루']

// [잠깐 실습 - splice() 메서드]
// 우리반에 학생 5명이 존재("영희", "수현", "하늘", "하나", "덕선")
// 2명이 전학을 갔다. ("하늘", "하나")
// 1명이 전학을 왔다. ("보검") -> 전학간 학생의 자리에 앉았다.
// 최종적으로 변경된 인원은 배열 데이터로 정렬한 후, 전학온 학생의 데이터 값을 배열의 인덱스번호로 출력하세요.
// (최종 결과) "보검"

var $myClass = ["영희", "수현", "하늘", "하나", "덕선"];
var $changeClass = $myClass.splice(2, 2, "보검");
console.log($changeClass);
console.log($myClass);
console.log($myClass[2]); // "보검"이가 2번이니까

// [실습문제]
// 원본 배열 데이터 ["곰인형", "꽃다발", "화장품"] ==splice() 메서드==>
// ["곰인형", "꽃다발", "스타벅스 쿠폰카드", "향수", "화장품"] 특정위치에 배열 데이터 추가
var itemList = ["곰인형", "꽃다발", "화장품"];
addItem = itemList.splice(2, 0, "스타벅스 쿠폰카드", "향수"); // 자르지 않겠다는 것이므로 개수에 0을 넣으면 된다.
console.log(addItem); // [] : 빈 배열 데이터
console.log(itemList);

// 기존 배열 데이터로부터 데이터를 변경하지 않으면서 요소를 꺼내는 slice() 메서드
document.write(
  `<h4>[인수가 한 개인 경우] 배열변수명.slice(인덱스번호) : 배열데이터의 지정한 인덱스 번호로부터\
    마지막 데이터까지 꺼낸다.</h4>`
);
var $color = ["Red", "Orange", "Yellow", "Green", "Blue"];
var $oneSlice = $color.slice(2);
console.log($oneSlice); // ['Yellow', 'Green', 'Blue']
console.log($color); // ['Red', 'Orange', 'Yellow', 'Green', 'Blue'] => 원본 데이터가 바뀌지 않음(splice와 다른 점)

document.write(
  `<h4>[인수가 두 개인 경우] 배열변수명.slice(인덱스번호1, 인덱스번호2) : 배열데이터의 지정한 인덱스 번호1로부터\
      지정한 인덱스번호2 직전까지의 데이터를 꺼낸다.</h4>`
);
var $twoSlice = $color.slice(2, 4);
console.log($twoSlice); // ['Yellow', 'Green']
console.log($color); // ['Red', 'Orange', 'Yellow', 'Green', 'Blue']

// [splice() VS slice()]
/*
공통점 : 기존 배열 데이터에서 추출하는 과정은 유사
차이점 : 
    - splice() : 원본 데이터 변경의 원인(삭제, 추가, 변경) => 원본 데이터가 중심
    - slice() : 원본 데이터 변경 없음 => 잘라낸 데이터가 중심
*/

// 1차 배열 var 변수명 = [data1, data2, data3, ....]
// 배열 데이터가 여러개의 변수명으로 분리된 상태
// 1차 배열을 사용하면 너무 많은 변수를 사용해야 한다. -> 1차 배열 사용 지양하기
var $img = ["img_01.jpg", "img_02.jpg", "img_03.jpg", "img_04.jpg"];
var $title = ["타이틀1", "타이틀2", "타이틀3", "타이틀4"];
var $intro = ["소개1", "소개2", "소개3", "소개4"];

document.write(`<div class="wrap" style="display:flex">`);
for (i = 0; i < 4; i++) {
  document.write(`<div class="box" style="border:1px solid #f00">`);
  document.write(
    `<img src="./img/${$img[i]}" style="width:100px; height:60px;"/>`
  );
  document.write(`<h3>${$title[i]}</h3>`);
  document.write(`<p>${$intro[i]}</p>`);

  document.write(`</div>`);
}
document.write(`</div>`);

// 2차 배열
/* 
변수명 = [
    data1, // 0번 인덱스
    data2, // 1번 인덱스
]
변수명 = [
    [
        data0-0, // 0번 인덱스(1차)의 0번 인덱스(2차)
        data0-1, // 0번 인덱스(1차)의 1번 인덱스(2차)
    ], // 0번 인덱스
    [
        data1-0, // 1번 인덱스(1차)의 0번 인덱스(2차)
        data1-1, // 1번 인덱스(1차)의 1번 인덱스(2차)
    ],  // 1번 인덱스
]
*/
// 2차 배열을 구성하는 과정에는 동일한 패턴으로 적용되게 설정이 중요
var $product = [
  ["img_01.jpg", "타이틀1", "소개1"], // 0번 인덱스
  ["img_02.jpg", "타이틀2", "소개2"], // 1번 인덱스
  ["img_03.jpg", "타이틀3", "소개3"], // 2번 인덱스
  ["img_04.jpg", "타이틀4", "소개4"], // 3번 인덱스
];
document.write(`<div class="wrap" style="display:flex">`);
// for문을 쓸 때 고정값 4라는 것 대신에 length를 써라.
for (i = 0; i < $product.length; i++) {
  document.write(`<div class="box" style="border:1px solid #f00">`);
  document.write(
    `<img src="./img/${$product[i][0]}" style="width:100px; height:60px;"/>`
  );
  document.write(`<h3>${$product[i][1]}</h3>`);
  document.write(`<p>${$product[i][2]}</p>`);
  document.write(`</div>`);
}
document.write(`</div>`);

var $kDrama = [
  ["오징어게임", "이정재"], // 0번 인덱스
  ["변호사 우영우", "박은빈"], // 1번 인덱스
  ["유괴의 날", "윤계상"], // 2번 인덱스
];
console.log($kDrama[2][0]); // "유괴의 날" 출력됨
console.log($kDrama[1]); // ['변호사 우영우', '박은빈']
console.log($kDrama[1][1]); // "박은빈" 출력됨

// 객체 배열 => JSON(DB로부터 받는 실제 데이터의 형태)
//[{}, {}]
//{key1 : [arrData1, arrData2]}

var kDrama = [
  { name: "오징어 게임", hero: "이정재" }, // 0번 인덱스
  { name: "변호사 우영우", hero: "박은빈" }, // 1번 인덱스
  { name: "유괴의 날", hero: "윤계상" }, // 2번 인덱스
];
console.log(kDrama[2].name); // "유괴의 날" 출력됨
console.log($kDrama[1]); // ['변호사 우영우', '박은빈']
console.log(kDrama[1].hero); // "박은빈" 출력됨

// 2차 배열 데이터를 활용한 상품 리스트 구성하기 ==> 배열 변수명[1차 배열의 인덱스번호][2차 배열의 인덱스번호]

// #1. 배열의 패턴을 구성 [이미지, 타이틀, 내용, 가격]
var pd_arr1 = [
  ["shop_01.jpg", "마마스앤파파스", "트레이닝 완구 포함", "월 9,000원"], // 0
  ["shop_02.jpg", "알집매트", "알집꾸러기 매트", "월 6,000원"], // 1
  ["shop_03.jpg", "알집소파1", "알집꾸러기 네이비 소파", "월 7,000원"], // 2
  ["shop_04.jpg", "알집소파2", "알집꾸러기 핑크 소파", "월 8,000원"], // 3
];
// #2. 구조를 구성하고 내부에 데이터를 담는다.
var section_case = ``;
section_case += `<section style="display:flex">`;
for (i = 0; i < pd_arr1.length; i++) {
  section_case += `
    <div class="box">
    <img src="./img/${pd_arr1[i][0]}" alt="">
    <h3>${pd_arr1[i][1]}</h3>
    <p>${pd_arr1[i][2]}</p>
    <span>${pd_arr1[i][3]}</span>
    </div>`;
}
section_case += `</section>`;
document.write(section_case);

// [실습] ===============================================================> 집에서 하기!!!!!!!!!!!
// 객체 배열 데이터를 활용한 상품 리스트 구성하기
var pd_arr2 = [
  {
    img: "shop_01.jpg",
    title: "마마스앤파파스",
    cont: "트레이닝 완구 포함",
    price: "월 9,000원",
  },
  {
    img: "shop_02.jpg",
    title: "알집매트",
    cont: "알집꾸러기 매트",
    price: "월 6,000원",
  },
  {
    img: "shop_03.jpg",
    title: "알집소파1",
    cont: "알집꾸러기 네이비 소파",
    price: "월 7,000원",
  },
  {
    img: "shop_04.jpg",
    title: "알집소파2",
    cont: "알집꾸러기 핑크 소파",
    price: "월 8,000원",
  },
];

// 배열 데이터를 기준으로 사용할 수 있는 반복문
// 기본 for
// for ~ in : for(변수명(index) in 배열데이터변수명){실행문}
// for ~ of : for(변수명(value) of 배열데이터변수명){실행문}
// 배열데이터변수명.forEach(function(인자들){ 실행문 });
// 배열데이터변수명.map(function(인자들){ 실행문 });
// 배열데이터변수명.filter(function(인자들){ 실행문 });
// 배열데이터변수명.reduce(function(인자들){ 실행문 });

var pd_arr1 = [
  ["shop_01.jpg", "마마스앤파파스", "트레이닝 완구 포함", "월 9,000원"], // 0
  ["shop_02.jpg", "알집매트", "알집꾸러기 매트", "월 6,000원"], // 1
  ["shop_03.jpg", "알집소파1", "알집꾸러기 네이비 소파", "월 7,000원"], // 2
  ["shop_04.jpg", "알집소파2", "알집꾸러기 핑크 소파", "월 8,000원"], // 3
];
for (idx in pd_arr1) {
  console.log(idx);
  console.log(typeof idx); // string -> 연산을 하려면 number로 바꿔줘야 함
  console.log(pd_arr1[idx]);
}
// of를 보통 많이 쓴다.
for (v of pd_arr1) {
  console.log(v);
}
// 아직은 forEach 몰라도 됨
pd_arr1.forEach(function (a, b) {
  console.log(a);
  console.log(b);
});

// sort() : 기존 배열 데이터를 어떤 기준으로 정렬할 것인가? (상품 리스트 인기순, 저가순, 고가순, 조회순... 사용자의 의도에 따라서 리스트가 재배치되는 과정)
document.write(`<hr />`);
document.write(`<h3>sort() 메서드 가능</h3>`);
document.write(
  `<h4>문자형태를 가진 배열 데이터 - 문자의 첫 글자를 기준으로 아스키코드 수에 따라서 정렬</h4>`
);
// ASCII code로 비교
// 여기서부터 다시 듣기------------------------------------------------------------와우 졸려 미치겠다..... 2교시 후반부터 3교시 다시 듣기
var $animal = ["monkey", "cat", "dog", "snake", "rabbit", "mouse"];
var $sort_01 = $animal.sort(); // a : 97 ~ z : 122
console.log($sort_01);
console.log($animal); // 원본 리스트 변경됨

var $name = ["강하늘", "박은빈", "마동석", "지민"];
var $sort_02 = $name.sort(); // 가 : 44032 ~ 힣 : 55203
console.log($sort_02); // ['강하늘', '마동석', '박은빈', '지민']

document.write(`<h4>숫자형태를 가진 배열 데이터</h4>`);
var $priceNum = [10000, 5000, 3000, 7000];
var $sort_03 = $priceNum.sort();
console.log($sort_03); // [10000, 3000, 5000, 7000] => 숫자데이터도 첫 숫자만 기준으로 정렬(사용 불가)

var $sort_04 = $priceNum.sort(function (a, b) {
  console.log(`${a}, ${b}`);
  return a - b; // 작은 숫자부터 정렬(최저가, 202201224/20231224 오래된 수)\
  // 10000 - 5000 = 5000 (양의 정수 : true) = sort() 함수 메서드 => 자리교체 발생[5000,10000, 3000, 7000]
  // 10000 - 3000 = 7000 (양의 정수 :true) = sort() 함수 메서드 => 자리교체 발생[5000, 1000, 10000,7000]
  // 10000 - 7000 = 3000 (양의 정수 : true)

  // 0또는 음의 정수는 sort()에서는 false => 자리교체 없음
  // 양의 정수는 sort()에서는 true => 자리교체 있음
});
console.log($sort_04); // [3000, 5000, 7000, 10000]

var num = 5000 - 2000;
if (num) {
  // 0은 false, 10은 true
  console.log("진행1");
} else {
  console.log("진행2");
}

// 2차 배열 중에서 정렬 (최저가 기준)
var sort_arr = [
  ["카카오 문구세트", 15000],
  ["라이언 인형", 20000],
  ["카카오 코스매틱 세트", 12000],
];
var rst_sort1 = sort_arr.sort(function (a, b) {
  return a[1] - b[1];
});
console.log(rst_sort1);
// 객체 배열 중에서 정렬 (최저가 기준)
var sort_objArr = [
  { name: "카카오 문구세트", price: 15000 },
  { name: "라이언 인형", price: 20000 },
  { name: "카카오 코스매틱 세트", price: 12000 },
];
var rst_sort2 = sort_objArr.sort(function (a, b) {
  return a.price - b.price;
});
console.log(rst_sort2);

// 객체 배열 중에서 정렬 (최고가 기준)
var rst_sort3 = rst_sort2.reverse(); // 기존 배열의 인덱스를 역순으로 조정한다.
console.log(rst_sort3);

var sort_objarr_maxPrice = [
  { name: "카카오 문구세트", price: 15000 },
  { name: "라이언 인형", price: 20000 },
  { name: "카카오 코스매틱 세트", price: 12000 },
];
var rst_sort4 = sort_objarr_maxPrice.sort(function (a, b) {
  return b.price - a.price;
});
console.log(rst_sort4); // price 기준으로 최고가 순으로 정렬된다.

// [문자객체] indexOf("찾을 문자") => 해당하는  문자 데이터의 인덱스번호를 추출
var string = "햇살이 비치는 따스한 날";
console.log(string.indexOf("따스한")); // 8(인덱스 번호)
// [배열] indexOf() : 동일한 데이터가 존재하는지에 대한 여부를 따진다.
var cart = [];
cart.push("딸기");
console.log(cart);
cart.push("포테토칩");
console.log(cart);
cart.push("바나나");
console.log(cart);
cart.push("딸기");
console.log(cart); // 불필요한 데이터의 중복 현상 발생

var cart_arr = ["딸기", "포테토칩", "바나나"];
var next_item = "딸기";
console.log(cart_arr.indexOf("딸기")); // 0
console.log(cart_arr.indexOf("바나나ㅋ")); // 2
console.log(cart_arr.indexOf("포도")); // -1 출력됨 (배열 데이터 상에서 존재하지 않을 때 출력되는 값)
if (cart_arr.indexOf(next_item) == -1) {
  cart_arr.push(next_item);
}
console.log(cart_arr);

// [실습] =================================================> 집에서 하기!!!!!!!!!!!!!!!! 아니야 하지마. 어려워
// 로또 1~46까지 랜덤(Math.random() : 0 ~ 1 사이의 난수만 변환)으로 숫자 6개를 추출하여 빈 배열 데이터에 담는데, 중복되는 숫자 없 게 구성한다.
var lotto = [];
