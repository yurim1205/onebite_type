// 인터페이스
// -> 타입에 이름을 지어주는 문법

interface Person {
    name: string;
    age: number;

    sayHi: () => void;
} // 선택적 프로퍼티나 readonly 사용 가능

const person: Person = {
    name: "이유림",
    age: 26,

    sayHi: function() {
        console.log("hi");
    },
}