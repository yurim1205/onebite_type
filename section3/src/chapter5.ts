// 타입 추론

// 타입 추론이 가능한 상황들
// 1. 변수 선언 (변수의 초기값으로 변수의 타입을 추론함)
let a = 10;
let b = "hi";
let c = {
    id: 1,
    name: "이유림",
    profile : {
        nickname: "yurm",
    }
}

// 2. 구조 분해 할당
let {id, name, profile} = c;
let [one, two, three] = [1, "hi", true];

// 3. 함수의 반환값
function func() {
    return "hello";
  }

// 4. 기본값이 설정된 매개변수
function func2(message = "hi") {
    return "hi";
}


// 주의해야 할 상황들

// 1. 암시적으로 any 타입으로 추론
let d; // any
d = 10; // any -> number
d.toFixed();

d = "hi"; // number -> string
d.toUpperCase();

// 2. const 상수의 추론
const num = 10;
const str = "hi";

// 최적 공통 타입
let arr = [1, "hi"];