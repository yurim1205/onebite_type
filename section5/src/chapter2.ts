// 선언 합침

// interface는 동일한 이름으로 중복 선언이 가능함
interface Person {
    name: string;
}

interface Person {
    age: number;
}

const person: Person = {
    name: "",
    age: 26,
}