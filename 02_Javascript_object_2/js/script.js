var bad_sentence = "뿌뿌뿌, 삐삐삐";
// "삐삐삐" => "@@@"로 변경하여 콘솔창에 출력 => "뿌뿌뿌, @@@";
console.log(bad_sentence.replace("삐삐삐", "@@@"));

// 문자 데이터로부터 특정 문장만을 추출할 때, slice(a, b) / substring(a, b) / substr(index, 자를 개수)
// substr(인덱스 번호, 지정한 인덱스번호로부터 자를 문자의 개수)
var $txt = "프론트엔드 주말과정";
var $select_txt = $txt.substr(3, 2);
console.log($select_txt); //"엔드"
var $sel_txt = $txt.substr(4, 4);
console.log($sel_txt); // " 주말과" // 공백도 인덱스번호를 갖고 있음

var address = "서울시 강남구 역삼동";
var address_length = address.length; // length는 메서드가 아니다.
console.log(address_length); // 11(Number)

// 휴대폰 번호를 입력했는데, 개인정보를 확인하고자 할 때 맨 뒷자리 4개만을 "****"로  표기해야 한다면
var $phoneNumber = "01012345678"; // "0101234****"
var $final_phoneNumber = $phoneNumber.substr(0, 7);
console.log($final_phoneNumber);
console.log($final_phoneNumber + "****"); // "0101234****"

// 01012345678(11 자리), 010-1234-5678(13자리), 010 1234 5678, 010/1234/5678, +00821012345678(15자리), +821012345687
var $phoneNum = "+00821012345678"; // "+0082101234****"
var $final_phoneNum = $phoneNum.substr(0, $phoneNum.length - 4);
console.log($final_phoneNum);
console.log($final_phoneNum + "****");

//[중간 실습1]
// 카드번호 기입 : "1234-5678-9876-5432" => "1234-5678-****-****"로 문자를 변경
var $card1 = "1234-5678-9876-5432";
// var $card_recipe1 = $card1.substr(0, 10) + "****-****"; // 자릿수가 바뀌지 않아서 그냥 숫자로 넣어도 됨.
var $card_recipe1 = $card1.substr(0, $card1.length - 9) + "****-****";
console.log($card_recipe1);

//[중간 실습2]
// 카드번호 기입 : "1234-5678-9876-5432" => "1234-****-****-5432"로 문자를 변경
var $card2 = "1234-5678-9876-5432";
var $card_recipe2 = $card2.substr(0, 5) + "****-****" + $card2.substr(14, 5);
console.log($card_recipe2);

// split("특정 문자") : 특정문자를 기준으로 배열 데이터(["데이터1", "데이터2", ...])화 사킴
var card3 = "1234-5678-9876-5432";
var arr_card3 = card3.split("-");
console.log(arr_card3);

// 변수명1.concat(변수명2) : 변수명1 데이터에 변수명2를 합친다.
var snack1 = "오징어 ";
var snack2 = "땅콩";
var result1 = snack1.concat(snack2);
console.log(result1);

// 변수명.trim() : 변수명에 존재하는 앞뒤 공백을 제거한다. (검색어 상의 공백이 해당)
// 구글에 앞에 공백을 넣은 상태로 검색어를 넣어도 나중에 검색을 누르면 그 공백이 사라진다.
var searchWord = "       경복궁 이집트   ";
console.log(searchWord.length); // 17자리(공백 포함)
var trimWord = searchWord.trim();
console.log(trimWord.length); // 7자리

// 문자객체에서 반드시 기억해야할 부분
/*
indexOf("찾을 문자") ==> -1 : 찾을 문자가 데이터에 없음 / 0 ~ 양의 정수 인덱스번호 : 찾을 문자가 존재한다는 의미
replace("바꿀문자", "새문자");
substr(인덱스번호, 자를 개수) => 문자 추출
split("특정문자") => "특정문자"를 기준으로 배열데이터화 시킨다.
trim() => 전후 공백을 제거
length => 문자 데이터의 길이를 측정(문자의 수) != byte
*/
