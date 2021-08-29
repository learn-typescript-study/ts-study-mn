interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: "Tony", age: 33, skill: "Iron Making" };
}

var tony = introduce();
console.log(tony.name); // o 유니온 타입이기 때문에 공통된 속성에만 접근할 수 있음
console.log(tony.skill); // skill에 접근할 수 없음
console.log(tony.age); // age에 접근할 수 없음

// before: 타입 단언을 사용하여 skill, age 값 가져오기
if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}

// after: 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
