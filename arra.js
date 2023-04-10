// .push : 배열의 끝에 하나 이상의 요소를 추가할 때 사용.
const arr = ["가", "나", "다"];
const result = arr.push("라");
arr; //[가, 나 , 다, 라]
console.log(result); // 4

// .shift() : 배열의 첫번째 요소를 제거할 때 사용.
const arr = ["가", "나", "다"];
const result = arr.shift();
arr; //[나, 다]
console.log(result); // 가

// .unshift : 배열의 맨 앞에 하나 이상의 요소를 추가 할 때 사용.
const arr = ["가", "나", "다"];
const result = arr.unshift("라", "마");
arr; //[라, 마, 가, 나, 다]
console.log(result); // 5

// .splice : 배열의 기존 요소를 삭제, 교체하거나 새 요소를 추가하여 배열의 내용을 변경할 때 사용
const arr = ["가", "나", "다"];
const result = arr.splice(2, 2, "바", "사"); // 2번째 인덱스부터 2개를 삭제 후 바, 사 를 추가
arr; //[가, 나, 바, 사, 마]
console.log(result); //  [다, 라]
