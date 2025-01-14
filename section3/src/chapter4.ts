// 대수 타입
// -> 여러 개의 타입을 합성해서 만드는 타입
// 합집합 타입, 교집합 타입이 존재함

// 1. 합집합(Union) 타입
let a: string | number | boolean | undefined | null | {};
a = 1;
a = 'hi';
a = true;

let arr:(number | string | boolean)[] = [1, "hi", true];

type Dog = {
    name: string;
    color: string;
}

type Person = {
    name: string;
    language: string;
}

type Union = Dog | Person

let union1 : Union = {
    name: "",
    color: "",
}

let union2: Union = {
    name: "",
    language: "",
}

let union3: Union = {
    name: "",
    color: "",
    language: "",
}


// 2. 교집합(Intersection) 타입
let variable: number & string;

type Dog2 = {
    name: string;
    color: string;
}

type Person2 = {
    name: string;
    language: string;
}

type Intersection = Dog2 & Person2;

let intersection : Intersection = {
    name: "",
    color: "",
    language: "",
}