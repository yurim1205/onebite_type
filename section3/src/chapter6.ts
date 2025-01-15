// 타입 단언

type Person = {
    name: string;
    age: number;
}

let person = {} as Person;
person.name = "유림";
person.age = 26;

type Dog = {
    name: string;
    color: string;
}

let dog = {
    name: "뽀야",
    color: "brown",
    breed: "말티즈",
} as Dog;


// 타입 단언의 규칙
// 값 as 타입 형식의 단언식을 A as B로 표현했을 때 아래의 두 가지 중 하나를 만족해야함

// 1) A가 B의 슈퍼타입이거나
// 2) A가 B의 서브타이어야 함
let num1 = 10 as never;   // 1번 경우
let num2 = 10 as unknown; // 2번 경우


// const 단언
let num4 = 10 as const; // 10 Number Literal 타입으로 단언됨

let cat = {
    name: "야옹이",
    color: "white",
} as const;


// Non Null 단언
type Post = {
    title: string;
    author?: string;
}

let post: Post = {
    title: "게시글",
    author: "유림",
}

const len: number = post.author!.length;