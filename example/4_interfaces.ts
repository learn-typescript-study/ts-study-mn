// 인터페이스
interface User {
  name: string;
  age: number;
}

// 변수에 사용하는 경우
const seho: User = { name: "hi", age: 100 };

// 함수의 매개변수에 사용하는 경우
function getUser(user: User) {
  console.log(user);
}

// 인터페이스에 정의된 속성, 타입 조건만 만족한다면 객체의 속성 갯수가 더 많아도 상관없다.
let test = {
  name: "hello",
  age: 20,
  id: 1, //
};

getUser(test);

//함수의 전체 타입에 사용하는 경우
interface SumFunction {
  (a: number, b: number): number;
}
let sum: SumFunction;
sum = function (num1: number, num2: string): number {
  return num1 + num2; // X
};

//배열의 인덱싱에 사용하는 경우
interface StringArray {
  [index: number]: string;
}
let arr: StringArray;
arr[0] = "hi";
arr[1] = 10; // X

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

const obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

// 타입 추론이 가능해짐
Object.keys(obj).forEach(function (value) {});

// 인터페이스 확장
// 상속
interface Person {
  name: string;
  age?: number; // 옵셔널 선택자 ? 동일하게 적용 가능
}
interface Developer extends Person {
  language: string;
}
const joo: Developer = { name: "joo", language: "ts" };
